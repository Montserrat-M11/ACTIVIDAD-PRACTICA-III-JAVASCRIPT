const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => res.sendFile(__dirname + "/index.html"))

app.get('/about', (req, res) => res.sendFile(__dirname + "/PracticaCurri.html"))

app.get('/contact', (req, res) => res.sendFile(__dirname + "/PracticaTablas.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))