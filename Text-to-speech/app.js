const express = require('express')
const app = express()
const port = process.env.PORT|| 3000


app.use(express.static('code'))

app.get('/', (req, res) => {
    res.sendFile('./code/index.html')
})

app.listen(port, () => console.log('SERVER UP AND RUNNING'))