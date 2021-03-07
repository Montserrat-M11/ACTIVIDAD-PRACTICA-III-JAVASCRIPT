/* 4. Proyecto Vocal o Carácter.
Se requiere que pida al usuario una letra y diga 
si ha escrito una vocal o algún otro caractér.*/

var car = prompt("Escriba una letra.");

if(car == "a" || car == "e" || car == "i" || car == "o" || car == "u")
{
    document.writeln(car +" es una vocal.")
}
else
{
    document.writeln(car +" es un caractér.")
}