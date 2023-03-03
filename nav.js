let gallery = document.getElementById('gallery')
let about = document.getElementById('about')
let duisburg = document.getElementById('duisburg')
let contact = document.getElementById('contact')

gallery.addEventListener('click', () => {
	document.getElementsByClassName('gallery')[0].scrollIntoView({ behavior: 'smooth' })
})
about.addEventListener('click', () => {
	document.getElementsByClassName('about')[0].scrollIntoView({ behavior: 'smooth' })
})
duisburg.addEventListener('click', () => {
	document.getElementsByClassName('duisburg')[0].scrollIntoView({ behavior: 'smooth' })
})
contact.addEventListener('click', () => {
	document.getElementsByClassName('contact')[0].scrollIntoView({ behavior: 'smooth' })
})