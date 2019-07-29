
// Get Input Element
let filterInput = document.getElementById('filterInput');
// Add Event Listaner
filterInput.addEventListener('keyup', filterNames);

function filterNames(argument) {
	// Get Value of Input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	
	// Get names ul
	let ul = document.getElementById('names');

	// Get li from ul
	let li = ul.querySelectorAll('li.collection-item');
	// Loop Through
	for (let i = 0 ; i <li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];
		// if matched
		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}


