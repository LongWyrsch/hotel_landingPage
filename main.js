var form = document.getElementById('form')
function handleForm(event) {
	event.preventDefault()
	document.querySelector('input[type="email"]').value = ''
	document.querySelector('textarea').value = ''
}
form.addEventListener('submit', handleForm)

const handleLeftArrow = () => {
	let firstImg = document.getElementsByClassName('first')[0]
	let secondImg = document.getElementsByClassName('second')[0]
	let thirdImg = document.getElementsByClassName('third')[0]
	let fourthImg = document.getElementsByClassName('fourth')[0]
	let fifthImg = document.getElementsByClassName('fifth')[0]
	let sixthImg = document.getElementsByClassName('sixth')[0]
	let seventhImg = document.getElementsByClassName('seventh')[0]

	firstImg.className = 'seventh'
	secondImg.className = 'first'
	thirdImg.className = 'second'
	fourthImg.className = 'third'
	fifthImg.className = 'fourth'
	sixthImg.className = 'fifth'
	seventhImg.className = 'sixth'
}

const handleRightArrow = () => {
	let firstImg = document.getElementsByClassName('first')[0]
	let secondImg = document.getElementsByClassName('second')[0]
	let thirdImg = document.getElementsByClassName('third')[0]
	let fourthImg = document.getElementsByClassName('fourth')[0]
	let fifthImg = document.getElementsByClassName('fifth')[0]
	let sixthImg = document.getElementsByClassName('sixth')[0]
	let seventhImg = document.getElementsByClassName('seventh')[0]

	firstImg.className = 'second'
	secondImg.className = 'third'
	thirdImg.className = 'fourth'
	fourthImg.className = 'fifth'
	fifthImg.className = 'sixth'
	sixthImg.className = 'seventh'
	seventhImg.className = 'first'
}

let chevronLeft = document.getElementsByClassName('chevronLeft')[0]
chevronLeft.addEventListener('click', handleLeftArrow, false)

let chevronRight = document.getElementsByClassName('chevronRight')[0]
chevronRight.addEventListener('click', handleRightArrow, false)



const about  = document.querySelector('.about .text')
const duisburg  = document.querySelector('.duisburg .text')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {threshold: 0.5}
)

observer.observe(about)
observer.observe(duisburg)

let gallery = document.getElementById('gallery')
let aboutButton = document.getElementById('about')
let duisburgButton = document.getElementById('duisburg')
let contact = document.getElementById('contact')

gallery.addEventListener('click', () => {
	document.getElementsByClassName('gallery')[0].scrollIntoView({ behavior: 'smooth' })
})
aboutButton.addEventListener('click', () => {
	document.getElementsByClassName('about')[0].scrollIntoView({ behavior: 'smooth' })
})
duisburgButton.addEventListener('click', () => {
	document.getElementsByClassName('duisburg')[0].scrollIntoView({ behavior: 'smooth' })
})
contact.addEventListener('click', () => {
	document.getElementsByClassName('contact')[0].scrollIntoView({ behavior: 'smooth' })
})