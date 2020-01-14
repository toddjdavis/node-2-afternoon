const express = require('express')
const ms = require('./controllers/messages_controller')

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))
const url = '/api/messages'
app.post(url, ms.create)
app.get(url, ms.read)
app.put(`${url}/:id`, ms.update)
app.delete(`${url}/:id`, ms.delete)

const port = 3001

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`)
})