import express from 'express'
import HomeController from './controllers/Home'
import DataController from './controllers/Data'
import LoginAutomateController from './controllers/LoginAutomate'

const app = express.Router()

app.use('/', HomeController)
app.use('/data', DataController)
app.use('/loginautomate', LoginAutomateController)

export default app