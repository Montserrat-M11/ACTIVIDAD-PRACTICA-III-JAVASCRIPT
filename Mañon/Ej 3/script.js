/* 3. Proyecto Igualdad o Mayor de tres Números.
Se requiere que pida al usuario tres números y diga si son iguales o, 
en caso contrario, cual es el mayor de ellos.*/

var num1 = prompt("Escriba el primer número:");
var num2 = prompt("Escriba el segundo número:");
var num3 = prompt("Escriba el tercer número:");

if(num1 && num2 == num3)
{
    document.writeln( num1 + ", " + num2 + " y "+ num3 +" son iguales.")
}
else if (num1 > num2 && num1 > num3)
{
    document.writeln(num1 +" es mayor que " + num2 +" y "+ num3)
}
else if (num2 > num1 && num2 > num3)
{
    document.writeln(num2 +" es mayor que " + num1 +" y "+ num3)
}
else
{
    document.writeln(num3 +" es mayor que " + num1 +" y "+ num2)
}