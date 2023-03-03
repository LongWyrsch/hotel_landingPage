import './style.css'

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



