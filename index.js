const express = require('express')
const app = express()
const importData = require("./flowers_api.json")
const port = process.env.PORT || 3000


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




// const flowers = require("./flowers_api.json")
// const port = process.env.PORT || 3000

// //routes
// app.get("/", (req, res) => {
//         rest.send("Welcome to my image banner")
// })

// app.get("/flowers", (req, res) => {
//         res.send(flowers)
// })

// app.listen(port, () => {
//         console.log(`Flower app is listening on port http://localhost:${port}`)
// })


// async function start(){
//         const res = await fetch("http://dog.ceo/api/breeds/list/all")
//         const data = await res.json()
//         getFlowers(data.message)  
// }
// start()

// function getDogs(){
//         document.getElementById("flowers").innerHTML = `
//         <div></div>
//         `
// }
