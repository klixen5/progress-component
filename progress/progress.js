function progress(circleElement, value, { animate = false, hide = false } = {}) {
  const correctValue = getCorrectValue(value)
  circleElement.style.strokeDasharray = `${correctValue} ${100 - correctValue}`
  if (animate) {
    circleElement.closest('svg').classList.toggle('progress-indicator__circle-container--spinning', true)
  } else {
    circleElement.closest('svg').classList.toggle('progress-indicator__circle-container--spinning', false)
  }

  if (hide) {
    circleElement.closest('svg').style.visibility = 'hidden'
  } else {
    circleElement.closest('svg').style.visibility = ''
  }
}

function getCorrectValue(value) {
  let normalize = value === '' ? 0 : parseInt(value, 10)

  if (normalize < 0 || isNaN(normalize)) {
    normalize = 0
  } else if (normalize > 100) {
    normalize = 100
  }

  return normalize
}

export default progress