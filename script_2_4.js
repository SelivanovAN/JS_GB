"use strict";
/*
Реализовать основные 4 арифметические операции (+, -, /, *) 
в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать два числа, 
складывать их и возвращать результат.
Обязательно использовать оператор return.
 */

function sum(a, b) {
    let c = a + b;
    return c;
}

alert("Операция сложения: " + sum(10, 5));

function subtract(d, e) {
    let f = d - e;
    return f;
}

alert("Операция вычетания: " + subtract(5, 5));

function division(g, h) {
    let k = g / h;
    return k;
}

alert("Операция деления: " + division(8, 2));

function multiplication(l, m) {
    let n = l * m;
    return n;
}

alert("Операция умножения: " + multiplication(2, 6));