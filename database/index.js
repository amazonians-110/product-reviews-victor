var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection is open')
});

//per review
var reviewSchema = new Schema({
  product_id: Number,
  product_name: String,
  product_ratings: Number,
  review: String,
  review_title: String,
  reviewer: String,
  review_comments: [],
  images: [],
  verified_purchase: Boolean,
  helpful_counter: Number,
  created_at: Date
})

//there will be many reviewSchemas, for the same and even different products
//product_id's will be from 1 to 100 in the database;

let Review = mongoose.model('Review', reviewSchema);




