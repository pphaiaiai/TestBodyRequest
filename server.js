const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/testGetBody', async (req, res) => {
  const reqBody = req.body
  
  try {
    console.log("🚀 ~ file: server.js ~ line 10 ~ app.post ~ reqBody", reqBody)
    res.status(202).json(reqBody)
  }catch (e) {
    console.log("🚀 ~ file: main.js ~ line 122 ~ app.post ~ e", e)
    res.status(400).send('Bad Request')
  }
})


app.listen(7000, () => {
  console.log('Start server at port 7000.')
})