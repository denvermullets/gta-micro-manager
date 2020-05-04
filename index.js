const startBtn = document.querySelector('#start')
const resupplyCokeBtn = document.querySelector('#resupplyCocaine')

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0 // remove decimal formatting
  //currency.format(2500) // this is how you call it
})
// init timer variables
let activeTimer = false
let cocaineSupply
let cocaineProduct
let weedSupply
let weedProduct
let moneySupply
let moneyProduct
// coke init supply percentages / value
let cocaineSupplyTimeLeft = 50
let cocaineSupplyCost = 37500
let cocaineProductProduced = 50
let cocaineProductValue = 210000
let cocainePercentage = 0 // this is used because the timing of cocaine production / gui updating is not linear
// weed init supply percentages / value
let weedSupplyTimeLeft = 50
let weedSupplyCost = 37500
let weedProductProduced = 50
let weedProductValue = 126000
// money init supply percentages / value
let moneySupplyTimeLeft = 50
let moneySupplyCost = 37500
let moneyProductProduced = 50
let moneyProductValue = 147000

document.addEventListener('DOMContentLoaded', function(event){
  updateBars()
})

startBtn.addEventListener('click', function(event){      
  isActive()
})

document.querySelector('#decreaseCokeProduct').addEventListener('click', function(event){
  if (cocaineProductProduced === 0) {
    console.log('no product left')
  } else {
    cocaineProductProduced -= 10
    cocaineProductValue -= 42000
    updateCoke()
  }
})

document.querySelector('#decreaseCokeSupply').addEventListener('click', function(event){
  if (cocaineSupplyTimeLeft === 0) {
    console.log('no product left')
  } else {
    cocaineSupplyTimeLeft -= 1
    cocaineSupplyCost += 750
    updateBars()
  }
})

document.querySelector('#increaseCokeSupply').addEventListener('click', function(event){
  if (cocaineSupplyTimeLeft === 100) {
    console.log('max supply')
  } else {
    cocaineSupplyTimeLeft += 1
    cocaineSupplyCost -= 750
    updateBars()
  }
})

document.querySelector('#increaseCokeProduct').addEventListener('click', function(event){
  if (cocaineProductProduced === 100) {
    console.log('max product')
  } else {
    cocaineProductProduced += 10
    cocaineProductValue += 42000
    updateBars()
  }
})


document.querySelector('#decreaseWeedProduct').addEventListener('click', function(event){
  if (weedProductProduced === 0) {
    console.log('no product left')
  } else {
    weedProductProduced -= 1.25 
    weedProductValue -= 3150
    updateBars()
  }
})


document.querySelector('#increaseWeedProduct').addEventListener('click', function(event){
  if (weedProductProduced === 100) {
    console.log('max product')
  } else {
    weedProductProduced += 1.25 
    weedProductValue += 3150
    updateBars()
  }
})

document.querySelector('#decreaseWeedSupply').addEventListener('click', function(event){
  if (weedSupplyTimeLeft === 0) {
    console.log('no product left')
  } else {
    weedSupplyTimeLeft -= 1
    weedSupplyCost += 750
    updateBars()
  }
})

document.querySelector('#increaseWeedSupply').addEventListener('click', function(event){
  if (weedSupplyTimeLeft === 100) {
    console.log('max supply')
  } else {
    weedSupplyTimeLeft += 1
    weedSupplyCost -= 750
    updateBars()
  }
})

document.querySelector('#sellWeed').addEventListener('click', () => {
  weedProductProduced = 0
  weedProductValue = 0
  updateBars()
})

document.querySelector('#resupplyWeed').addEventListener('click', () => {
  weedSupplyTimeLeft = 100
  weedSupplyCost = 0
  updateBars()
})


resupplyCokeBtn.addEventListener('click', () => { 
  cocaineSupplyTimeLeft = 100
  cocaineSupplyCost = 0
  updateBars()
})

document.querySelector('#sellCocaine').addEventListener('click', () => {
  cocaineProductProduced = 0
  cocaineProductValue = 0
  updateBars()
})

document.querySelector('#decreaseMoneySupply').addEventListener('click', () => {
  if (moneySupplyTimeLeft === 0) {
    console.log('no product left')
  } else {
    moneySupplyTimeLeft -= 1
    moneySupplyCost += 750
    updateBars()
  }
})

document.querySelector('#increaseMoneySupply').addEventListener('click', () => {
  if (moneySupplyTimeLeft === 100) {
    console.log('max supply')
  } else {
    moneySupplyTimeLeft += 1
    moneySupplyCost -= 750
    updateBars()
  }
})

document.querySelector('#decreaseMoneyProduct').addEventListener('click', () => {
  if (moneyProductProduced === 0) {
    console.log('no product left')
  } else {
    moneyProductProduced -= 2.5 
    moneyProductValue -= 7350
    updateBars()
  }
})


document.querySelector('#increaseMoneyProduct').addEventListener('click', () => {
  if (moneyProductProduced === 100) {
    console.log('max product')
  } else {
    moneyProductProduced += 2.5
    moneyProductValue += 7350
    updateBars()
  }
})

document.querySelector('#sellMoney').addEventListener('click', () => {
  moneyProductProduced = 0
  moneyProductValue = 0
  updateBars()
})

document.querySelector('#resupplyMoney').addEventListener('click', () => {
  moneySupplyTimeLeft = 100
  moneySupplyCost = 0
  updateBars()
})

function updateBars() {
  document.querySelector('.cokeSupplyPercent').style.width = cocaineSupplyTimeLeft + '%'
  document.querySelector('#cocaineSupply').innerText = `Resupply cost: ${currency.format(cocaineSupplyCost)}`
  document.querySelector('.cokeProductPercent').style.width = cocaineProductProduced + '%'
  document.querySelector('#cocaineValue').innerText = `Sale value: ${currency.format(cocaineProductValue)}`

  document.querySelector('.weedSupplyPercent').style.width = weedSupplyTimeLeft + '%'
  document.querySelector('#weedSupply').innerText = `Resupply cost: ${currency.format(weedSupplyCost)}`
  document.querySelector('.weedProductPercent').style.width = weedProductProduced + '%'
  document.querySelector('#weedValue').innerText = `Sale value: ${currency.format(weedProductValue)}`

  document.querySelector('.moneySupplyPercent').style.width = moneySupplyTimeLeft + '%'
  document.querySelector('#moneySupply').innerText = `Resupply cost: ${currency.format(moneySupplyCost)}`
  document.querySelector('.moneyProductPercent').style.width = moneyProductProduced + '%'
  document.querySelector('#moneyValue').innerText = `Sale value: ${currency.format(moneyProductValue)}`
}


function isActive () {
  if (activeTimer === false) {
    startBtn.innerText = 'Stop Business Timers'
    activeTimer = true
    startAllTimers()
  } else {
    startBtn.innerText = 'Start Business Timers'
    activeTimer = false
    stopAllTimers()
  }
}

function startAllTimers() {
  cocaineSupply = setInterval(cocaineSupplyTimer, 60000)  // 1:12 M:s 72000
  cocaineProduct = setInterval(cocaineProductTimer, 60000) // - 60000 = 1min
  weedSupply = setInterval(weedSupplyTimer, 120000)  // 2:00 M:s 120000
  weedProduct = setInterval(weedProductTimer, 240000) // 4:00 M:s 240000
  moneySupply = setInterval(moneySupplyTimer, 96000)  // 1:36 M:s 96000
  moneyProduct = setInterval(moneyProductTimer, 480000) // 8:00 M:s 480000
  console.log("timers started")
}

function stopAllTimers() {
  stopAllCokeTimers()
  stopAllWeedTimers()
  stopAllMoneyTimers()
  console.log('all timers stopped')
}

function stopAllMoneyTimers() {
  clearInterval(moneySupply)
  clearInterval(moneyProduct)
  console.log('stop all money timers')
}

function stopAllCokeTimers() {
  clearInterval(cocaineSupply)
  clearInterval(cocaineProduct)
  console.log('coke timers stopped')
}

function stopAllWeedTimers() {
  clearInterval(weedSupply)
  clearInterval(weedProduct)
  console.log('weed timers stopped')
}

function cocaineSupplyTimer() {
  if (cocaineSupplyTimeLeft <= 0) {
    stopAllCokeTimers()
  }
    cocaineSupplyCost += 750
    cocaineSupplyTimeLeft -= 1
    updateCoke()
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
    updateBars()
    console.log('+1 minute product')
}

function weedSupplyTimer() {
  if (weedSupplyTimeLeft <= 0) {
    stopAllWeedTimers()
  }
    weedSupplyCost += 750
    weedSupplyTimeLeft -= 1
    updateWeed()
    console.log('-1 supply')
}

function weedProductTimer() {
  if (weedProductProduced >= 100) {
    stopAllWeedTimers()
}
    weedProductProduced += 1.25 
    weedProductValue += 3150

    updateBars()
    console.log('+1 weed minute product')
}

function moneySupplyTimer() {
  if (moneySupplyTimeLeft <= 0) {
    stopAllMoneyTimers()
  }
    moneySupplyCost += 750
    moneySupplyTimeLeft -= 1
    updateMoney()
    console.log('-1 money supply')
}

function moneyProductTimer() {
  if (moneyProductProduced >= 100) {
    stopAllMoneyTimers()
}
    moneyProductProduced += 2.5 
    moneyProductValue += 7350
    updateBars()
    console.log('+1 money minute product')
}

