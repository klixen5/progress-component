import progress from './progress/progress.js'

const valueElement = document.querySelector('#value')
const checkAnimateElement = document.querySelector('#animate')
const checkHideElement = document.querySelector('#hide')
const circleElement = document.querySelector('.progress-indicator__circle')

valueElement.addEventListener('input', handler)
checkAnimateElement.addEventListener('change', handler)
checkHideElement.addEventListener('change', handler)


function handler() {
  const options = {
    animate: checkAnimateElement.checked,
    hide: checkHideElement.checked
  }

  progress(circleElement, valueElement.value, options)
}

progress(circleElement, 60)