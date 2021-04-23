const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Inicio de la página</h1>'))

app.get('/nosotros', (req, res) => res.send('<h1>Sobre nosotros</h1>'))

app.get('/productos', (req, res) => res.send('<h1>Productos</h1>'))

app.get('/contactos', (req, res) => res.send('<h1>Contactos</h1>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))