export default function progress(circle, value, { animate = false, hide = false } = {}) {
  circle.style.strokeDasharray = `${value} ${100 - value}`

  if (animate) {
    circle.closest('svg').classList.toggle('circle-container--spinning', true)
  } else {
    circle.closest('svg').classList.toggle('circle-container--spinning', false)
  }

  if (hide) {
    circle.style.display = 'none'
  } else {
    circle.style.display = ''
  }
}