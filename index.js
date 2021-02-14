const express = require('express')
const app = express()
const importData = require("./flowers_api.json")
const port = process.env.PORT || 3001


//routes
app.get("/", (req, res) => {
    res.send("Hello Word")
})

app.get("/flowers_api", (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log('Flower app is listening on http://localhost:${port}')
})

