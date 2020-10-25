"use strict";

//EXP 1
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - Это ноль");
    } else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
        console.log(i + " - нечетное число");
    } else {
        console.log(i + " - четное число");
    }
}

//EXP 2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//EXP 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (let j = 0; j < products.length; j++) {
    let sale = products[j].price * 0.15;
    console.log(sale);
}// не совсем понятно задание ПРОСЬБА пояснить в каком виде выводить скидки
// (как массив или просто значение) и как это сделать с помощью forEach?

/*
   products.forEach(function(cost) {
       for (let j = 0; j < cost.length; j++) {
           let newCost = cost[j].price * 0.15;
           console.log(newCost);
       };
    });
*/

// EXP 6 Подсмотрел в интернете
for(var x = 0; x < 20; x++){
    var str = "";
    for(var y = 0; y <= x; y++){
        str += "*";
    }
    console.log(str);
}