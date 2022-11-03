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
