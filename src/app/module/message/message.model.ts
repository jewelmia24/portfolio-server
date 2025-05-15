import { TMessage } from './message.interface'
import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema<TMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Message = mongoose.model<TMessage>('Message', messageSchema)
export default Message
