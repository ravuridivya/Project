const express = require('express')

module.exports = {
  router: express.Router(),

  App: () => {
    const app = express()
      .use(express.json())
      .use(
        express.urlencoded({
          extended: true,
          limit: 52428800,
          parameterLimit: 5000
        })
      )

    // middleware to avoid CORS ....
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*')
      res.header('Access-Control-Allow-Headers', '*')
      res.header('Access-Control-Allow-Methods', '*')

      next()
    })

    const port = process.env.PORT || 5000

    let server = app.listen(port, e => {
      e
        ? console.log(`Server Cannot Start On Port ${port}`, e)
        : console.log(`Server Started On Port ${port}`)
    })

    return app
  },

  BASE_URL: `api/v${process.env.npm_package_version.charAt(0)}`
}
