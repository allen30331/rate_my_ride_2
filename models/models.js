const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
  driverName: {type: String, required: true},
  company: {type: String, required: true},
  tagNumber: {type: String, required: true},
  city: {type: String, required: true},
    reviews: [{
    driverRating: Number,
    description: String, 
    comment: String,
    created: {type: Date, default: Date.now}
  }]
  });

driverSchema.set('toObject', {
  virtuals: true,
  getters: true
})


driverSchema.set('toJSON', {
  virtuals: true
})


driverSchema.virtual('descriptionSummary').get(function() {
  
  let descriptionSummaryCount = {};
  for (var i = 0; i < this.reviews.length; i++) {
    if(!descriptionSummaryCount[this.reviews[i].description]) descriptionSummaryCount[this.reviews[i].description] = 0;
    descriptionSummaryCount[this.reviews[i].description] += 1;
  }
  return descriptionSummaryCount; 
});

driverSchema.virtual('averageDriverRating').get(function() {

  let totalRating = 0;

  for (var j = 0; j < this.reviews.length; j++) {
    totalRating += this.reviews[j].driverRating;
  }  

  let averageRating = totalRating/this.reviews.length;


  return averageRating.toFixed(1);
});

driverSchema.methods.apiRepr = function() {
  return {
      id: this._id,
      driverName: this.driverName,
      company: this.company,
      tagNumber: this.tagNumber,
      city: this.city,
      averageDriverRating: this.averageDriverRating,
      descriptionSummary: this.descriptionSummary,
      reviews: this.reviews
      }
}

const Driver = mongoose.model('Driver', driverSchema);

module.exports = {Driver};