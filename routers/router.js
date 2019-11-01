module.exports = {
  init (server, empresasMemory) {
    // Get Por id
    server.get('/empresa/:id', (req, res) => {
      console.log('[/empresa/:id]', req.params.id, { empresasMemory })
      const data = empresasMemory.find(empresa => {
        const id = parseInt(req.params.id)
        const retorno = (empresa.id === id)
        console.log(empresa, id, retorno)
        return retorno
      })
      const retorno = {
        id: data.id,
        nome: data.nome
      }
      res.send(retorno)
    })
  }

}
