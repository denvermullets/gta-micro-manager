const startBtn = document.querySelector('#start')
const resupplyCokeBtn = document.querySelector('#resupplyCocaine')

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0 // remove decimal formatting
  //currency.format(2500) // this is how you call it
})
// init timer variables
let cocaineSupply
let cocaineProduct
let weedSupply
let weedProduct
let moneySupply
let moneyProduct
// coke init supply percentages / value
let cocaineSupplyTimeLeft = 100
let cocaineSupplyCost = 0
let cocaineProductProduced = 0
let cocaineProductValue = 0
let cocainePercentage = 0
// weed init supply percentages / value
let weedSupplyTimeLeft = 100
let weedSupplyCost = 0
let weedProductProduced = 0
let weedProductValue = 0
let weedPercentage = 0
// money init supply percentages / value
let moneySupplyTimeLeft = 100
let moneySupplyCost = 0
let moneyProductProduced = 0
let moneyProductValue = 0
let moneyPercentage = 0

document.addEventListener('DOMContentLoaded', function(event){

})

startBtn.addEventListener('click', function(event){      
  startAllTimers()
})


resupplyCokeBtn.addEventListener('click', function(event) { 
  stopAllCokeTimers()

  cocaineSupplyTimeLeft = 100
  cocaineSupplyCost = 0
  document.querySelector('.cokeSupplyPercent').style.width = cocaineSupplyTimeLeft + '%'
  document.querySelector('#cocaineSupply').innerText = `Resupply cost: ${currency.format(cocaineSupplyCost)}`

  startAllTimers()
})

function startAllTimers() {
  console.log("timers started")
  cocaineSupply = setInterval(cocaineSupplyTimer, 72000)  // 1:12 M:s 72000
  cocaineProduct = setInterval(cocaineProductTimer, 60000) // 1:30 M:s -- 90000 // 15m = 900000ms  // 8.4mins makes 1 box -- 504000ms // - 60000 = 1min
  weedSupply = setInterval(weedSupplyTimer, 120000)  // 2:00 M:s 120000
  weedProduct = setInterval(weedProductTimer, 240000) // 4:00 M:s 240000
  moneySupply = setInterval(moneySupplyTimer, 96000)  // 1:36 M:s 96000
  moneyProduct = setInterval(moneyProductTimer, 480000) // 8:00 M:s 480000

}

function stopAllCokeTimers() {
  console.log('coke timers stopped')
  clearInterval(cocaineSupply)
  clearInterval(cocaineProduct)
}

function stopAllCokeTimers() {
  console.log('weed timers stopped')
  clearInterval(weedSupply)
  clearInterval(weedProduct)
}

function cocaineSupplyTimer() {
  if (cocaineSupplyTimeLeft <= 0) {
    stopAllCokeTimers()
  }
    cocaineSupplyCost += 750
    cocaineSupplyTimeLeft -= 1
    document.querySelector('.cokeSupplyPercent').style.width = cocaineSupplyTimeLeft + '%'
    document.querySelector('#cocaineSupply').innerText = `Resupply cost: ${currency.format(cocaineSupplyCost)}`
    console.log('-1 supply')
}

function cocaineProductTimer() {
  if (cocaineProductProduced >= 100) {
    stopAllCokeTimers()
  } if (cocainePercentage === 8) {
    cocaineProductProduced += 10 // 10 is half a block
    cocaineProductValue += 42000
  } if (cocainePercentage === 37) {
    cocaineProductProduced += 10 // 10 is half a block
    cocaineProductValue += 42000
  } if (cocainePercentage === 66) {
    cocaineProductProduced += 10 // 10 is half a block
    cocaineProductValue += 42000
  } if (cocainePercentage === 97) {
    cocaineProductProduced += 10 // 10 is half a block
    cocaineProductValue += 42000
  } if (cocainePercentage === 165) {
    cocaineProductProduced += 20 // 10 is half a block
    cocaineProductValue += 84000
  } if (cocainePercentage === 233) {
    cocaineProductProduced += 20 // 10 is half a block
    cocaineProductValue += 84000
  } if (cocainePercentage === 300) {
    cocaineProductProduced += 20 // 10 is half a block
    cocaineProductValue += 84000
  }
    cocainePercentage += 1
    document.querySelector('.cokeProductPercent').style.width = cocaineProductProduced + '%'
    document.querySelector('#cocaineValue').innerText = `Sale value: ${currency.format(cocaineProductValue)}`
    console.log('+1 minute product')
}

function weedSupplyTimer() {
  if (weedSupplyTimeLeft <= 0) {
    stopAllWeedTimers()
  }
    weedSupplyCost += 750
    weedSupplyTimeLeft -= 1
    document.querySelector('.weedSupplyPercent').style.width = weedSupplyTimeLeft + '%'
    document.querySelector('#weedSupply').innerText = `Resupply cost: ${currency.format(weedSupplyCost)}`
    console.log('-1 supply')
}


function weedProductTimer() {
  if (weedProductProduced >= 100) {
    stopAllWeedTimers()
}
    weedProductProduced += 1.25 
    weedProductValue += 3150
    // weedPercentage += 1
    document.querySelector('.weedProductPercent').style.width = weedProductProduced + '%'
    document.querySelector('#weedValue').innerText = `Sale value: ${currency.format(weedProductValue)}`
    console.log('+1 weed minute product')
}

function moneySupplyTimer() {
  if (moneySupplyTimeLeft <= 0) {
    stopAllMoneyTimers()
  }
    moneySupplyCost += 750
    moneySupplyTimeLeft -= 1
    document.querySelector('.moneySupplyPercent').style.width = moneySupplyTimeLeft + '%'
    document.querySelector('#moneySupply').innerText = `Resupply cost: ${currency.format(moneySupplyCost)}`
    console.log('-1 money supply')
}


function moneyProductTimer() {
  if (moneyProductProduced >= 100) {
    stopAllMoneyTimers()
}
    moneyProductProduced += 2.5 
    moneyProductValue += 7350
    // moneyPercentage += 1
    document.querySelector('.moneyProductPercent').style.width = moneyProductProduced + '%'
    document.querySelector('#moneyValue').innerText = `Sale value: ${currency.format(moneyProductValue)}`
    console.log('+1 money minute product')
}

