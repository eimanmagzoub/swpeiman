var mongoose = require('mongoose');
//var connection = mongoose.connect('mongodb://localhost/mean_db');
var connection = mongoose.connect('mongodb://raya2018:raya2018@ds127994.mlab.com:27994/sudan_wp');
 
module.exports = connection;

