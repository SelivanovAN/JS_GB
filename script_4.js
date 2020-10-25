"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(discount) {
    this.price = this.price - (this.price / 100 * discount);
};

/*
const Product1 = new Product("Apple", 300);
Product1.make25PercentDiscount();
console.log(Product1);
*/
 const products = [
     new Product("apple", 300),
     new Product("juce", 200),
     new Product("orange", 500)
  ];
 for (let product of products) {
     product.make25PercentDiscount(25);
 }

console.log(products);

 function Post(author, date) {
     this.author = author;
     // this.text = text;
     this.date = date;
 }

 Post.prototype.edit = function(text) {
     this.text= text;
 };

 const post1 =new Post("San", "25.09.2020");
 post1.edit("Hello");
 console.log(post1);

 function AttachedPost() {
     highlighted: null;
     Post.call(this);
 }

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted= highlighted;
};

 let high = Object.create(AttachedPost);
 high.highlighted = true;

const post2 =new Post("van", "25.09.2010");
post2.edit("SAN");
//post2.makeTextHighlighted(true);
console.log(post2);