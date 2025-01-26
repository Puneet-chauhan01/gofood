const express = require('express')
const app = express()
const port = 5000;
const mongo = require('./db');
const cors = require('cors')
mongo();

app.use(cors())

app.use(express.json());
app.use('/api',require('./routes/Createuser'));
app.use('/api',require('./routes/DisplayData'));
app.use('/api',require('./routes/OrderData'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})