const showMessage = () => {
  alert('Hello! You clicked the button.')
}

const heading = document.querySelector('h1')

function changeTitle() {
  heading.textContent = 'You changed the title!'
}
