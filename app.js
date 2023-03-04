var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors());
app.use(express.json()); // for parsing application/json


app.listen(3000, () => {
    console.log('Servidor ligado')
})

//DB Conexão
const conn = require("./db/conn")
conn();

const routes = require("./routes/router")
app.use("/api", routes)
