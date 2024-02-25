document.write("<h1>Chapter-No-05</h1><br><h2>Math Expressions</h2>");
 let a = prompt("Enter first number");
 let b = prompt("Enter second number");

 var c =parseInt(a) + parseInt(b);
 var d =parseInt(a) - parseInt(b);
 var e =parseInt(a) / parseInt(b);
 var f =parseInt(a) * parseInt(b);
 var g =parseInt(a) % parseInt(b);
 document.write("sum " + c + "<br>")
 document.write("sub " + d , "<br>")
 document.write("div " + e , "<br>")
 document.write("mul " + f , "<br>")
 document.write("rem " + g , "<br>")

var a1 = 
document.write("declare variable: " + a1 + "<br>");
var b1 = 5
document.write("Initial variable: " + b1 + "<br>");
var c1 = ++b1;
document.write("After increment: " + c1 + "<br>");
var c1 = c1 + 7 ;
document.write("After add 7 the value is: " + c1 + "<br>");
var dec = --c1;
document.write("Value after decrement: " + dec + "<br>");
var rem = dec / 3;
document.write("The reminder value is: " + rem + "<br>");
var cost = 5, ticket5 = cost * 600;
document.write("Total cost to buy " + cost + " tickets to a movie is " + ticket5 + " PKR");



var number = prompt("Table of")
document.write("<h1>Table</h1><br>" + number + " x 1 = " + number * 1 + "<br>" + number + " x 2 = " + number * 2 + "<br>" +  number + " x 3 = " + number * 3 + "<br>" + number + " x 4 = " + number * 4 + "<br>" + number + " x 5 = " + number * 5 + "<br>" + number + " x 6 = " + number * 6 + "<br>" + number + " x 7 = " + number * 7 + "<br>" + number + " x 8 = " + number * 8 + "<br>" + number + " x 9 = " + number * 9 + "<br>" + number + " x 10 = " + number * 10 + "<br>");

var c = prompt("Enter Celcius");
var f = prompt("Enter Fahrenheit");

var cl = ( f + 32 ) * 5 / 9;
var fn = ( c * 9 / 5 ) + 32;

document.write("<h1>Temperature</h1> <br> " +  c + " C to F " + cl + "<br>")
document.write( f + " F to C " + fn + "<br>")