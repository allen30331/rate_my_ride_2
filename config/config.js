exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/rate_my_ride_2';

exports.TEST_DATABASE_URL = process.env.DATABASE_URL ||
                      		global.DATABASE_URL ||
                      		'mongodb://localhost/testdb_rate_my_ride_2';

exports.PORT = process.env.PORT || 8080;


