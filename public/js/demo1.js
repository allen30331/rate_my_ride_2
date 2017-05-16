let demoTagNumber = '1234';


function getDemoDriver(demoTagNumber, callbackFn) {
  console.log(demoTagNumber);
  $.ajax({
    url: `/drivers/${demoTagNumber}/tagNumber`,  //http://localhost:8080
    type: 'GET',
    dataType: 'json',

  success: function(data) {
    if(data) {
      driverId = data.id;
      driverName = data.driverName;
      callbackFn(data);
    }
  },

  error: function(error) {
    console.log(error);
    callbackFn(error);  
    }
  });
}

function renderData(data) {
  
  let now = new Date();
  
  let day = now.getDate();

    let month = now.getMonth();

    let year = now.getFullYear();


  if (data.status === 500) {
    $('.modal').show();
  }
  else {
    $('.driver-results').append(
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
        $('.driver-results').append(
          `<div class="row">
              <div class="col-12">
                <h3>${key}: ${data.descriptionSummary[key]}</h3>
              </div>
          </div>`);
      }


      data.reviews.forEach(function (review) {
        $('.driver-results').append(
            `<div class="row">
                <div class="col-12">
                  <p>rating: ${review.driverRating}</p>
                  <p>description: ${review.description}</p>
                  <p>comment: ${review.comment}</p>
                  <p>created: ${month}/${day}/${year}</p>
                  <div class="border"></div>
                </div>
            </div>`
          )
          
      });
  }
}



(function searchForDemoDriver() {
  getDemoDriver(demoTagNumber, renderData);
})();