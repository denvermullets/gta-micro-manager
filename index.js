// 5 bars with 20 tics each of supplies.
// 1 tic of supplies are used every 1:12 (1.2mins) fully upgraded.
// So 1 box of Coke takes 30 minutes to make and consumes 25 tics. ~1.25 bars.
// Every tic costs $750 in supplies (when bought). 1 Bar is worth $15K in stock.
// It takes 300 minutes (5 hours) to produce full 10 stock.
// In those 300 minutes 250 tics of supplies will be used. 250 tics with 20 tics per bar mean that it will take 12.5 bars to fully produce $420K worth of coke.
// Without calculating business utility charges, that should mean that $420K worth of coke cost $187.5K of bought supplies. ($0 if stolen just time then.)
// So net profit with buying supplies is $232.5K every 5 hours.

// 1:30 mins to produce
// 1:12 mins to consume

// 60000 - 1 minute

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
// init supply percentages / value
let cocaineSupplyTimeLeft = 100
let cocaineSupplyCost = 0
let cocaineProductProduced = 0
let cocaineProductValue = 0
let cocainePercentage = 0

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
}

function stopAllCokeTimers() {
  console.log('timers stopped')
  clearInterval(cocaineSupply)
  clearInterval(cocaineProduct)
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