/*2. Proyecto Signos de Dos Números
Se requiere que pida al usuario dos números; y diga cuántos y cuáles de ellos son positivos o negativos.*/

var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");

if(num1 > 0 && num2 > 0)
{
    document.writeln( num1 + " y " + num2 + " son positivos.")
}
else if(num1 < 0 && num2 > 0) 
{
    document.writeln( num1 + " es negativo y " + num2 + " positivo.")
}
else if(num1 > 0 && num2 < 0) 
{
    document.writeln( num1 + " es positivo y " + num2 + " negativo.")
}
else
{
    document.writeln( num1 + " y " + num2 + " son negativos.")
}