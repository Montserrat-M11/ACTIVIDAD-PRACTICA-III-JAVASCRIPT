/*Crea una función que calcule el mayor de 3 números. Con ella, se debe permitir que el usuario pueda introducir los tres valores y en una página presente cuál es el mayor de ellos.*/

function mayor(num1, num2, num3) {
    
    num1 = prompt("Escriba el primer número:");
    num2 = prompt("Escriba el segundo número:");
    num3 = prompt("Escriba el tercer número:");

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
}

mayor();