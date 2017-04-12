module.exports = srv => new Promise((resolve, reject) => {
  srv.on('error', reject)

  srv.listen(() => {
    const {port} = srv.address()
    resolve(`http://localhost:${port}`)
  })
})
