
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  setTimeout(() => {
    res.json({ success: true, message: "finished!" })
  }, req?.body?.delay || 300)
})

app.post('/sum', (req, res) => {
  res.json({ success: true, value: req?.body?.valA + req?.body?.valB });
})

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`)
})

