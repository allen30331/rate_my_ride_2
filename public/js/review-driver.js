let driverId = localStorage.getItem("driverId");

console.log(driverId);


/////Creates Ajax request to create review begin/////
function createReview(driverRating, description, comment, callback) {
  $.ajax({
    url: `/drivers/${driverId}/reviews`,  //http://localhost:8080
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(
     {
        
        driverRating: driverRating,
        description: description,
        comment: comment
         
      }
    ),

  
   success: function(data) {
      callback();
  },
   error: function(error) {
      let errorString = error.responseText.split(':')[1];
      let errorStringEdit = errorString.substring(1).slice(0, errorString.length -3)
      alert(errorStringEdit);
    }
});
}
/////Creates Ajax request to create review end/////


function alert() {
	console.log('added review');
}


function executeCreateReview() {
	let driverRating = $('#review-form').find('#driverRating').val();
	let description = $('#review-form').find('#description').val();
	let comment = $('#review-form').find('#comment').val();
	createReview(driverRating, description, comment, alert);
}