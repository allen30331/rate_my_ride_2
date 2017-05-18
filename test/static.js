const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const faker = require('faker');
chai.use(chaiHttp);
const mongoose = require('mongoose');

const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config/config');




describe('Static Pages', function() {


  it('should return 200 status from root page', function() {
    let res;
    return chai.request(app)
    .get('/')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
  });


  it('should return 200 status from add-driver page', function() {
    let res;
    return chai.request(app)
    .get('/add-driver')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
  });

  it('should return 200 status from demo page', function() {
    let res;
    return chai.request(app)
    .get('/demo')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
  });

  it('should return 200 status from results page', function() {
    let res;
    return chai.request(app)
    .get('/results')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
  });

  it('should return 200 status from review-driver page', function() {
    let res;
    return chai.request(app)
    .get('/review-driver')
    .then(function(_res) {
      res = _res;
      res.should.have.status(200);
      res.should.be.html;
    });
  });
});