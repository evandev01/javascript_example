/**
 * Function that accesses the button element with the ID of 'change-button'
 * Adds an event listener to that button that tells the compiler, if this button is clicked, "do something"
 */

/**
 * Solution 1
 */
// document.getElementById('change-button').addEventListener('click', function () {
// 	console.log('clicked')
// })

/**
 * Solution 2
 */

// var changeButton = document.getElementById('change-button')

// changeButton.addEventListener('click', function () {
// 	console.log('clicked')
// })

/**
 * Solution 3
 */

// function logger() {
// 	console.log('clicked')
// }

/**
 * Display content in div
 */
function displayContent() {
	document.getElementById('contentDiv').innerHTML = '<h1>Content Displayed</h1>'
}

function removeContent() {
	document.getElementById('contentDiv').innerHTML = ''
}

var isTimeout = false

function changeBackground() {
	isTimeout = true

	if (isInterval) {
		stopInterval()
	}

	setTimeout(function () {
		document.body.style.backgroundColor = 'rgb(82, 219, 240)'
	}, 2000)
}

var colors = ['blue', 'black', 'gray']
var i = 0
var isInterval = false
var intervalId

console.log(isTimeout)

function startInterval() {
	isInterval = true

	intervalId = setInterval(function () {
		document.body.style.backgroundColor = colors[i]
		i++

		if (i > colors.length - 1) {
			i = 0
		}
	}, 2000)
}

function stopInterval() {
	isInterval = false

	clearInterval(intervalId)
}
