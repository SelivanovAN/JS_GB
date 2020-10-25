"use strict";
// EX 1.1 es5

/*
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(discount) {
    this.price = this.price - (this.price / 100 * discount);
};


//const Product1 = new Product("Apple", 300);
//Product1.make25PercentDiscount();
//console.log(Product1);

 const products = [
     new Product("apple", 300),
     new Product("juce", 200),
     new Product("orange", 500)
  ];

 for (let product of products) {
     product.make25PercentDiscount(25);
 }

console.log(products);
*/

// EX 1.1. es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(discount) {
        this.price = this.price - (this.price / 100 * discount);
    }
}

const product1 = new Product("apple", 100);
product1.make25PercentDiscount(25);
console.log(product1);
// А как здесь сразу массив из продуктов сделать сделать, с выполненным методом по приминению скидки?

// EX 1.2 es5

/*
 function Post(author, date) {
     this.author = author;
     this.text = null;
     this.date = date;
 }

 Post.prototype.edit = function(text) {
     this.text = text;
 };

 const post1 =new Post("San", "25.09.2020");
 post1.edit("Hello");
 console.log(post1);

 function AttachedPost(author, date) {
     Post.call(this, author, date);
     this.highlighted = false;
 }

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted = highlighted;
};

const post2 =new AttachedPost("VVV", "05.10.2020");
post2.edit("Red");
post2.makeTextHighlighted(true);
console.log(post2);
*/

class Post {
    constructor(author, date) {
        this.author = author;
        this.text = null;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, date) {
        super(author, date);
        this.highlighted = false;
    }
    makeTextHighlighted(highlighted) {
        this.highlighted = highlighted;
    }
}

const post1 = new AttachedPost("Alexander", "10.05.2020");
post1.makeTextHighlighted(true);
post1.edit("Привет");
console.log(post1);
