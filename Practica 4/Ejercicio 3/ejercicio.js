/* Crea una función que calcule el perímetro de un cuadrado, a partir de su lado. Crea también otra función que calcule la superficie de un cuadrado a partir de su lado. Luego de aceptar los valores para cada lado del cuadrado esta pueda mostrar a través de una página, su perímetro y el área del cuadrado. 

Formula: P = 4 s*/

function perimetro(lados) {
    
    p = 4 * lados;
    document.writeln("El perímetro es: " + p);
}

function superficie(base) {
    
    s = base * base;
    document.writeln("La superficie es: " + s);
}

perimetro(7);
superficie(9);
