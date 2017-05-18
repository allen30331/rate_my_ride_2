function searchForDriver() {
	let tagNumber = $('form').find('.search-field').val().toUpperCase();
	let myStorage = localStorage.setItem("query", tagNumber);
}


