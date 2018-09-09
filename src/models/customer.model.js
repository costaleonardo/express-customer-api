const mongoose = require('mongoose');

mongoose.connect('mongodb://test:test123@ds141952.mlab.com:41952/test-db');

const CustomerSchema = new mongooseSchema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
