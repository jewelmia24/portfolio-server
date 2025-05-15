/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { messageRoute } from './app/module/message/message.route'
import { blogRouter } from './app/module/blog/blog.route'
const app = express()

app.use(express.json())

app.use('/api/v1/message', messageRoute)
app.use('/api/v1/blog', blogRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('server is running')
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: error.stack,
    })
  }
})

export default app
