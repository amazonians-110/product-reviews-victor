const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://victor:victor123@ds125385.mlab.com:25385/products', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection is open')
});

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  product_id: Number,
  category: String,
  product_name: String,
  product_ratings: Number,
  review: String,
  review_title: String,
  reviewer: String,
  images: [],
  verified_purchase: Boolean,
  helpful_counter: Number,
  created_at: String
})

let Review = mongoose.model('Review', reviewSchema);

Review.deleteMany({}, () => {
  console.log('Database cleared. Ready for inserting');
})

var data = { 
   category: [ 'shoes', 'electronics', 'apparel', 'auto', 'health', 'lifestyle', 'tech', 'furniture',
              'splurge', 'food' ],
   verified_purchase: [ true, false ],
    };

generateImages = function() {
  var imgs = [];
  var num = Math.floor(Math.random() * 10);
  for (var i = 0; i < num; i++) {
    imgs.push(faker.image.food());
  }
  return imgs;
}

for (var i = 1; i <=100; i++) {
  var review_instance = new Review({
    product_id: i,
    category: data.category[Math.floor(Math.random() * data.category.length)],
    product_name: faker.commerce.productName(),
    product_ratings: Math.floor(Math.random() * 5) + 1,
    review: faker.lorem.sentences(),
    review_title: faker.lorem.sentence(),
    reviewer: faker.name.findName(),
    images: generateImages(),
    verified_purchase: data.verified_purchase[Math.floor(Math.random() * data.verified_purchase.length)],
    helpful_counter: Math.floor(Math.random() * 500 ) + 1,
    created_at: faker.date.past().toDateString()
  })
  review_instance.save((err) => {
    if (err) {
      console.log(err);
    } 
  })
}

function grabProduct(productid, callback) {
  Review.find({product_id : productid}, (err, num) => {
    if (err) {
      callback(err);
    }
    callback(null, num);
  });
}

module.exports.grabProduct = grabProduct;
