const driverTagNumber = localStorage.getItem("query");

//console.log(searchTerm, 'these are the results');


/////Gets driver bby the drivers tag number/////
function getDriver(driverTagNumber, callbackFn) {
  $.ajax({
    url: `/drivers/${driverTagNumber}/tagNumber`,  //http://localhost:8080
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
    console.log('this is the error', error);
    callbackFn(error);  
    }
  });
}
/////Gets driver by the drivers tag number end/////



function renderData(data) {
	console.log(data);
}


(function executeSearch() {
	getDriver(driverTagNumber, renderData);
})();


