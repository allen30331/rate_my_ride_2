let driverId;

let driverName;

let driverTagNumber = localStorage.getItem("query");



/////Gets driver by the drivers tag number/////
function getDriver(driverTagNumber, callbackFn) {
  $.ajax({
    url: `/drivers/${driverTagNumber}/tagNumber`,  
    type: 'GET',
    dataType: 'json',

  success: function(data) {
    if(data) {
      driverId = data.id;
      driverName = data.driverName;
      localDriverName = localStorage.setItem("driverName", driverName);
      localDriverId = localStorage.setItem("driverId", driverId);
      callbackFn(data);
    }
  },

  error: function(error) {
    console.log('this is the error', error);
    callbackFn(error);  
    }
  });
}
/////Gets driver by the drivers tag number end/////



function renderData(data) {	
	if (data.status === 500) {
		$('.modal').show();
	}
	else {
		$('.container').append(
			`<div class="row">
				<div class="col-12">
					<h1>${data.driverName}</h1>
					<a href="/review-driver" class="review-driver-button">Review Driver</a>
					<h3>${data.company}</h3>
					<h3>tag number: ${data.tagNumber}</h3>
					<h3>city: ${data.city}</h3>
					<h3>rating: ${data.averageDriverRating}</h3>
					<h3 class="driver-description">Tags for this driver</h3></div>
				</div>
			</div>`
		);


		for (key in data.descriptionSummary) {
    		$('.container').append(
          `<div class="row">
	          	<div class="col-12">
	          		<h3>${key}: ${data.descriptionSummary[key]}</h3>
	          	</div>
          </div>`);
  		}


	    data.reviews.forEach(function (review) {
	    	let date = new Date(review.created);
		    $('.container').append(
	          `<div class="row">
		          	<div class="col-12">
		          		<p>rating: ${review.driverRating}</p>
		          		<p>description: ${review.description}</p>
		          		<p>comment: ${review.comment}</p>
		          		<p>created: ${date.toDateString()}</p>
		          		<div class="border"></div>
		          	</div>
	          </div>`
	        )
	        
	    });
	}
}



(function executeSearch() {
	console.log(driverTagNumber, 'helllooooo');
	getDriver(driverTagNumber, renderData);
})();


