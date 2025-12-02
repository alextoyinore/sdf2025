function greet(){
    alert("Hello, World!");
}


function farewell(name){
    alert("Goodbye, " + name + "!");
}

// var name = prompt("Enter your name:");
// farewell(name);

// function with multiple parameters
function add(a, b){
    return a + b;
}

// var a = parseInt(prompt("Enter first number:"));
// var b = parseInt(prompt("Enter second number:"));

var a = document.querySelector('#num1').value;
var b = document.querySelector('#num2').value;
var result = document.querySelector('#result');
var btnAdd = document.querySelector('#btnAdd');

// btnAdd.addEventListener('click', function(){
//     var sum = add(parseInt(a), parseInt(b));
//     if(sum > 0){
//         result.textContent = `${a} + ${b} = ${sum}`;
//     }
// })

btnAdd.onclick = function(){
    var sum = add(parseInt(a), parseInt(b));
    if(sum > 0){
        result.textContent = `${a} + ${b} = ${sum}`;
    }   
}

var myfunc = () => alert("This is an arrow function!");

// Lambda function (arrow function)
var multiply = (x, y) => x * y;

// var x = parseInt(prompt("Enter first number for multiplication:"));
// var y = parseInt(prompt("Enter second number for multiplication:"));
// alert("Product: " + multiply(x, y));


