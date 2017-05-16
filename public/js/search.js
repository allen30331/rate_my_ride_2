function searchForDriver() {
	// $('form').submit(function() {
		let tagNumber = $('form').find('.search-field').val();
		//alert(tagNumber);
		console.log(tagNumber, 'hello');
		let myStorage = localStorage.setItem("query", tagNumber);
	// });
}

// function searchForDriver() {
// 	alert('hi');
// }

