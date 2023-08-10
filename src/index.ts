import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import {router} from './routes'
import {mongoUrl} from './utils/mongoUrl'

try {
  mongoose.connect(mongoUrl()).then(() => {
    const app = express()
    const port = process.env.PORT || 3000

    const corsOptions = {
      origin: ['http://localhost:3000', 'https://norisushi.pt'],
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    }
    app.use(cors(corsOptions))

    app.use(express.json())
    app.use(router)

    app.listen(port, () => console.log(`Server is running at port ${port}`))
  })
} catch (error: unknown) {
  const botChatToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const url = `https://api.telegram.org/bot${botChatToken}/sendMessage?chat_id=${chatId}&text=${
    '```JSON%0A' + error + '```'
  }&parse_mode=markdown`

  fetch(url, {
    method: 'GET',
  })

  console.error(error)
}
