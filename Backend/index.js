const express = require(`express`)
const morgan = require("morgan")
const app = express()


//Middelwares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api/", require("./routes/estudiante"))
app.use("/api/", require("./routes/profesor"))
app.use("/api/", require("./routes/evaluacion"))

app.get("/", function (req, res) {
    res.send("Hola, bienvenidos al un nuevo mundo por explorar")
})

app.listen(8030, function () {
    console.log("El servidor esta corriendo en un puerto 8030")
})