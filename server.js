const express = require('express')
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())

app.post('/testGetBody', async (req, res) => {
  const reqBody = req.body
  
  try {
    res.status(202).json(reqBody)
    console.log("🚀 ~ file: server.js ~ line 10 ~ app.post ~ reqBody", reqBody)
    console.log("🚀 ~ debug respone ------------------------------->", JSON.stringify(reqBody))
  }catch (e) {
    console.log("🚀 ~ file: main.js ~ line 122 ~ app.post ~ e", e)
    res.status(400).send('Bad Request')
  }
})

app.post('/verifyToken', async (req, res) => {
  const reqBody = req.body

  validToken = '1234'
  
  if(reqBody.token === validToken) {
    
    const responeData = {
      "message": "Valid Token",
    }

    res.status(200).json(responeData)
    console.log("🚀 ~ file: server.js ~ line 10 ~ app.post ~ reqBody - Token", responeData)

  } else {

    const responeData = {
      "message": "Invalid Token",
    }

    res.status(400).json(responeData)
    console.log("🚀 ~ file: main.js ~ line 122 ~ app.post ~ e", responeData)
  }
})

app.listen(7000, () => {
  console.log('Start server at port 7000.')
})