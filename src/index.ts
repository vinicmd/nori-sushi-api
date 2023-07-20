import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import {router} from './routes'
import {mongoUrl} from './utils/mongoUrl'

mongoose
  .connect(mongoUrl())
  .then(() => {
    const app = express()
    const port = process.env.PORT || 3001

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
  .catch((error: unknown) => console.log('Connection error:', error))
