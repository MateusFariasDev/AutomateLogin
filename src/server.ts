import express from 'express'
import router from './routes'
import fs from 'fs'
import path from 'path'

const app = express()

if (!fs.existsSync(path.join(__dirname, 'data', 'login.json'))) {
  const obj = {
    username: [],
    password: []
  }
  fs.appendFile(path.join(__dirname, 'data', 'login.json'), JSON.stringify(obj), (error) => {
    if (error) throw error
  })
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(5021, () => 'server running on port 5021')


