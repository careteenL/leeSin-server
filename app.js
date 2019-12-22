const Koa = require('koa')
const app = new Koa()
const port = 10000

const sourceMapMiddleware = require('./middleware/sourceMap.js')

app.use(sourceMapMiddleware)

app.listen(port, () => {
  console.log(`server in port ${port}`)
})
