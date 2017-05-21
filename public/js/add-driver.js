/////Creates variable so it can be used in the url of the Ajax request/////
let driverId;

//Creates variable to be used in thank you message in 
//replaceAddDriverHeading function/////
let driverName;

/////Creates  variable so it can be used in the url of the Ajax request/////
let driverTagNumber;

/////Creates variable so it can be used in the url of the Ajax request/////
let reviewId;  


/////Creates Ajax request to create driver begin/////
function createDriver(driverName, company, tagNumber, city, driverRating, description, comment, callback) {
  $.ajax({
    url: '/drivers',  //http://localhost:8080
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(
     {
        driverName: driverName,
        company: company,
        tagNumber: tagNumber,
        city: city,
        reviews: [
          {
            driverRating: driverRating,
            description: description,
            comment: comment
          }
        ]
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
/////Creates Ajax request to create driver end/////





function displayDriverAddedMessage() {
  $('.container').html(
                 `<div class="row">
                    <div class="col-12">
                      <p>Thanks for adding ${driverName}!</p>
                    </div>
                 </div>`
                 );
  setTimeout(function() {window.location.assign('/');}, 2000);
}





function submitDriver() {
  event.preventDefault();
  driverName = $('.add-driver').find('#driver-name').val();
  let company = $('.add-driver').find('#company').val();
  let tagNumber = $('.add-driver').find('#tagNumber').val();
  let city = $('.add-driver').find('#city').val();
  let stringDriverRating = $('.add-driver').find('#driverRating').val();
  let driverRating = parseInt(stringDriverRating);
  let description = $('.add-driver').find('#description').val();
  let comment = $('.add-driver').find('#comment').val();
  createDriver(driverName, company, tagNumber, city, driverRating, description, comment, displayDriverAddedMessage);
}




