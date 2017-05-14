$('form').submit(function() {
	let tagNumber = $('form').find('.search-field').val();
	let myStorage = localStorage.setItem("query", tagNumber);
});


function greet() {
	alert('hello');
}

//module.exports = greet;








