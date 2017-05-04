const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const path = require('path');

const driversRouter = require('./routes/driversRouter');

const {DATABASE_URL, PORT} = require('./config/config');
const {Driver} = require('./models/models');

const app = express();

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('common'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;


    
//Static endpoints begin//
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/add-driver', (req, res) => {
  res.sendFile(__dirname + '/public/views/add-driver.html');
});

app.get('/demo', function(req,res) {
  res.sendFile(__dirname + '/public/views/demo.html');
});

app.get('/results', function(req,res) {
  res.sendFile(__dirname + '/public/views/results.html');
});

app.get('/practice', function(req,res) {
  res.sendFile(__dirname + '/public/views/practice.html');
});

app.get('/review-driver', function(req,res) {
  res.sendFile(__dirname + '/public/views/review.driver.html');
});

//Static endpoints end//



app.use('/drivers', driversRouter);


app.use('*', function(req, res) {
   //res.send('error', 500);
  res.status(404).json({message: 'Not Found'});
});


let server;

function runServer(databaseUrl) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
    	console.log(databaseUrl);
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}


// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};

