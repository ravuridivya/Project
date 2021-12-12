const {
  express: { App }
} = require('../app/config')

const main = App()

//backend working check endpoint
main.get(`/api/v1`, (req, res) => {
  res.send('API IS WORKING FINE')
  res.end()
  return res
})

const { user } = require('../app/routes')

main.use(user)