// .2 write a js program to find maximum between three numbers.

// var num1 = +prompt("enter a first number");
// var num2 = +prompt("enter a second number");
// var num3 = +prompt("enter a third number");

// function maxNumber(num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         return num1;
//     }
//     else if (num2 > num3 && num2 > num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// var b = maxNumber(num1,num2,num3);
// alert("the max number is " + "" + b)


//3.Write a js program to check whether a number is negative, positive or zero.

/*var enterNumber = +prompt("enter a number to find whether ");

if(enterNumber === 0){
    alert("number is zero");
}
else if (enterNumber > 0){
    alert("number is positive");
}
else{
    alert("number is negative")
}*/


var enterNumber = +prompt("enter a value to find is even or odd");

if (enterNumber %2 === 0){
    alert("number is even");
}
else{
    alert("number is odd");
}