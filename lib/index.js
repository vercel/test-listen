export default async function listen(srv) {
  return new Promise((resolve, reject) => {
    srv.listen(err => {
      if (err) {
        return reject(err)
      }
      const {port} = srv.address()
      resolve(`http://localhost:${port}`)
    })
  })
}
