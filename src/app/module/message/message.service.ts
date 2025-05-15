import { TMessage } from './message.interface'
import Message from './message.model'

const createMessage = async (payload: TMessage) => {
  const result = await Message.create(payload)
  return result
}

const getAllMessage = async () => {
  const result = await Message.find()
  return result
}

const deleteMessage = async (id: string) => {
  const result = await Message.findByIdAndDelete(id)
  return result
}

export const messageService = {
  createMessage,
  getAllMessage,
  deleteMessage,
}
