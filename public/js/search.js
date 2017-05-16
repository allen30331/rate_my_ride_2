function searchForDriver() {
	let tagNumber = $('form').find('.search-field').val();
	console.log(tagNumber, 'hello');
	let myStorage = localStorage.setItem("query", tagNumber);
}


