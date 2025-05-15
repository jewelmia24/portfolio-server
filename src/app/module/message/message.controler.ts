import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { messageService } from './message.service'

const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await messageService.createMessage(req.body)

  res.status(201).json({
    success: true,
    message: 'Message sent successfully!',
    data: result,
  })
})

const getAllMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await messageService.getAllMessage()

  res.status(200).json({
    success: true,
    message: 'Message get successfully!',
    data: result,
  })
})

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await messageService.deleteMessage(id)

  res.status(200).json({
    success: true,
    message: 'Message delete successfully!',
    data: result,
  })
})

export const messageController = {
  createMessage,
  getAllMessage,
  deleteMessage,
}
