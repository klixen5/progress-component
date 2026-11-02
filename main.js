import progress from './progress.js'

const circleElement = document.querySelector('.circle')
const inputElement = document.querySelector('#value')
const checkAnimateElement = document.querySelector('#animate')
const checkHideElement = document.querySelector('#hide')

const startValue = Number(inputElement.value)

inputElement.addEventListener('input', function () {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }
  let value = inputElement.value === '' ? 0 : parseInt(inputElement.value, 10)

  if (isNaN(value)) return

  if (value < 0) {
    value = 0
  } else if (value > 100) {
    value = 100
  }

  progress(circleElement, value, options)
})

checkAnimateElement.addEventListener('change', function () {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }
  let value = inputElement.value === '' ? 0 : parseInt(inputElement.value, 10)

  if (isNaN(value)) return

  if (value < 0) {
    value = 0
  } else if (value > 100) {
    value = 100
  }

  progress(circleElement, value, options)
})

checkHideElement.addEventListener('change', function () {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }
  let value = inputElement.value === '' ? 0 : parseInt(inputElement.value, 10)

  if (isNaN(value)) return

  if (value < 0) {
    value = 0
  } else if (value > 100) {
    value = 100
  }

  progress(circleElement, value, options)
})

progress(circleElement, startValue)