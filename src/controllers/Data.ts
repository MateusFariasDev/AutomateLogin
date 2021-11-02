import { Router, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'

const DataController = Router()

DataController.post('/send', async (request: Request, response: Response) => {
  const { username, password } = request.body

  try {
    fs.readFile(path.join(__dirname, '..', 'data', 'login.json'), 'utf8', (error, data) => {
      if (error) throw error
  
      const dataToJson = JSON.parse(data)
  
      dataToJson.username.push(username)
      dataToJson.password.push(password)
      
      fs.writeFile(path.join(__dirname, '..', 'data', 'login.json'), JSON.stringify(dataToJson), (error) => {
        if (error) throw error
      })
    })

    return response.json('Dados cadastrados com sucesso!')

  } catch (error) {
    throw error
  }
})

DataController.get('/list', async (request: Request, response: Response) => {
  try {
    fs.readFile(path.join(__dirname, '..', 'data', 'login.json'), 'utf8', (error, data) => {
      if (error) throw error

      const dataToJson = JSON.parse(data)

      return response.json(dataToJson)
    })

  } catch (error) {
    throw error
  }
})

export default DataController