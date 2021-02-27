/* 1. Proyecto División de Dos Números. 
Se requiere que pida al usuario dos números y muestre su división, 
pero sólo en caso de que el segundo no sea cero; si el segundo es 
cero, deberá escribir "No se puede dividir entre cero". */

var num1 = prompt("Escriba el primer número:")
var num2 = prompt("Escriba el segundo número:")

if(num2 != 0) 
{
    division = num1/num2
    document.writeln("La división es: " + division)
}
else
{
    document.writeln("No se puede dividir entre cero.")
}