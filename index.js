module.exports = (srv, hostname = 'localhost') => new Promise((resolve, reject) => {
  srv.on('error', reject)

  srv.listen(() => {
    const {port} = srv.address()
    resolve(`http://${hostname}:${port}`)
  })
})
