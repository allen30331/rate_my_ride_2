
	$('.submit').click(function() {
		let tagNumber = $('form').find('.search').val();
		let myStorage = localStorage.setItem("query", tagNumber);
	});
	
	// var search = "sade";
 //     var locaStorage = localStorage.setItem("query", search);