let driverId = localStorage.getItem("driverId");

let driverName = localStorage.getItem("driverName");

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


function displayReviewAddedMessage() {
	$('.container').html(
                 `<div class="row">
                    <div class="col-12">
                      <p>Thanks for reviewing ${driverName}!</p>
                    </div>
                 </div>`
                 );
}


function executeCreateReview() {
	let driverRating = $('#review-form').find('#driverRating').val();
	let description = $('#review-form').find('#description').val();
	let comment = $('#review-form').find('#comment').val();
	createReview(driverRating, description, comment, displayReviewAddedMessage);
}