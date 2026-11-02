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
  if (this.value === '') {
    progress(circleElement, 0, options)
    return
  }
  const value = parseInt(this.value, 10)
  progress(circleElement, value, options)
})

checkAnimateElement.addEventListener('change', function () {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }
  if (inputElement.value === '') {
    progress(circleElement, 0, options)
    return
  }
  const value = parseInt(inputElement.value, 10)
  progress(circleElement, value, options)
})

checkHideElement.addEventListener('change', function () {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }
  if (inputElement.value === '') {
    progress(circleElement, 0, options)
    return
  }
  const value = parseInt(inputElement.value, 10)
  progress(circleElement, value, options)
})

progress(circleElement, startValue)