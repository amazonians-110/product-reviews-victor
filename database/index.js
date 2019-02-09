var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://victor:victor123@ds125385.mlab.com:25385/products');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection is open')
});

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
  created_at: Date
})

let Review = mongoose.model('Review', reviewSchema);

var data = {
    "product_id": [],
    "category": ['shoes', 'electronics', 'apparel', 'auto', 'health', 'lifestyle', 'tech', 'furniture', 'splurge', 'food'],
    "product_name": [],
    "product_ratings": [],
    "reviewer": [],
    "review_title": [],
    "review": [],
    "images": [],
    "verified_purchase": [true, false],
    "helpful_counter": [],
    "created_at": []
  }


//create instance, 100 of em
//then iterate thru each
//then save to mlab

//product_id
for (var i = 1; i <=100; i++) {
  data.product_id.push(i);
}

//product_name
for (var i = 1; i <= 100; i++) {
  data.product_name.push(faker.commerce.productName());
}

//product_ratings
for (var i = 1; i <= 5; i++) {
  data.product_ratings.push(i);
}

//reviewer
for (var i = 1; i <= 100; i++) {
  data.reviewer.push(faker.name.findName());
}

//review_title
for(var i = 1; i <=100; i++) {
  data.review_title.push(faker.lorem.sentence());
}

//review
for (var i = 1; i <= 100; i++) {
  data.review.push(faker.lorem.sentences());
}

//images
for (var i = 1; i <= 100; i++) {
  data.images.push(faker.image.food());
}

//helpful counter
for (var i = 1; i <=50; i++) {
  data.helpful_counter.push(faker.random.number({min:1, max:200}));
}
//created at
for (var i = 1; i <= 100; i++) {
  data.created_at.push(faker.date.past());
}






