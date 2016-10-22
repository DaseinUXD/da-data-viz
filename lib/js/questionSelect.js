/*!
 * onSight v0.0.1-alpha
 * Copyright 2016 Digital Alchemy (http://www.digital-alchemy.com)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

function attachCheckboxHandlers() {

	// get reference to element containing question checkboxes
	var questSet  = document.getElementById('accordion');

	// get reference to input elements in toppings container element
	var questions = questSet.getElementsByTagName('input');

	// assign function to onclick property of each checkbox
	for (var i=0, len=questions.length; i<len; i++) {
			if ( questions[i].type === 'checkbox' ) {
					questions[i].onclick = updateChart; {

					}
			}
	}
}
function updateChart(e) {
	// 'this' is in reference to checkbox clicked
	var form = this.form;

	//get current value in


	// if checkbox is checked, make change
	if this.checked.value === '1275007' {
		alert("Hi");
	}


}
