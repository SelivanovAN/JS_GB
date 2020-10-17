"use strict";
/*
Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – 
строка с названием операции. 
В зависимости от
переданного значения операции (использовать switch) 
выполнить одну из арифметических операций
(использовать функции из задания 4) и 
вернуть полученное значение.
*/

function mathOperation(arg1, arg2, operation) {
    let v = 0;
    switch (operation) {
        case "+":
            v = arg1 + arg2;
            return v;
        case "-":
            v = arg1 - arg2;
            return v;
        case "/":
            v = arg1 / arg2;
            return v;
        case "*":
            v = arg1 * arg2;
            return v;
    }

}
let w = mathOperation(3, 6, "+")
alert("Результат выполненной операции: " + w);

