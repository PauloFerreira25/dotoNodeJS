const express = require('express')
const bodyParser = require('body-parser')
const os = require('os')

const server = express()
const port = 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
console.log(os.platform())
server.get('/', (req, res) => res.send('Hello World!'))

// Objeto
const empresasMemory = []
// Function
// ()

// Listo
server.get('/empresas', (req, res) => { res.send(empresasMemory) })

require('./routers/router').init(server, empresasMemory)

// Replace
server.post('/empresa/:id', (req, res) => {
  let retorno = {}
  const index = empresasMemory.findIndex(e => { return e.id === parseInt(req.params.id) })
  if (index >= 0) {
    empresasMemory[index] = req.body
    retorno = empresasMemory[index]
  }
  res.send(retorno)
})
// Add
server.put('/empresa', (req, res) => {
  const obj = req.body
  empresasMemory.push(obj)
  res.send(obj)
})

// detelte
server.delete('/empresa/:id', (req, res) => {
  let retorno = {
    status: false
  }
  const index = empresasMemory.findIndex(e => { return e.id === parseInt(req.params.id) })
  if (index >= 0) {
    empresasMemory.splice(index, 1)
    retorno = {
      status: true
    }
  }
  res.send(retorno)
})

server.listen(port, () => console.log(`Example server listening on port ${port}!`))
