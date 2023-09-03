const tls = require('tls')

module.exports = (srv, hostname = 'localhost') => new Promise((resolve, reject) => {
  srv.on('error', reject)

  srv.listen(() => {
    const {port} = srv.address()
    const protocol = (srv instanceof tls.Server) ? 'https' : 'http'
    resolve(`${protocol}://${hostname}:${port}`)
  })
})
