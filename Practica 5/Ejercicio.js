const principal = document.getElementById("principal")
principal.classList.add("principal")

//Imagen
let contenImagen = document.createElement("div")
contenImagen.classList.add("contenI")
principal.appendChild(contenImagen)

let imagen = document.createElement("img")
imagen.setAttribute("src", "imagen.jpg")
imagen.classList.add("imagen")
contenImagen.appendChild(imagen)

//Título
let contenTitulo = document.createElement("div")
contenTitulo.classList.add("contenT")
principal.appendChild(contenTitulo)

contenTitulo.innerHTML = "Cómo añadir un efecto a una imagen"

//Párrafo
let contenParrafo = document.createElement("div")
contenParrafo.classList.add("contenP")
principal.appendChild(contenParrafo)

contenParrafo.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."

//Botón
let contenBoton = document.createElement("div")
contenBoton.classList.add("contenB")
principal.appendChild(contenBoton)

contenBoton.innerHTML = "Leer más"