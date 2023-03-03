var form = document.getElementById('form')
function handleForm(event) {
	event.preventDefault()
	document.querySelector('input[type="email"]').value = ''
	document.querySelector('textarea').value = ''
}
form.addEventListener('submit', handleForm)


