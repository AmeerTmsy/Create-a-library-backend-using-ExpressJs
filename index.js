const express = require('express')
const bookRoutes = require('./routes/bookRoutes')
const autherRoutes = require('./routes/autherRoutes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Library home page')
})

app.use('/book', bookRoutes)
app.use('/auther', autherRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})