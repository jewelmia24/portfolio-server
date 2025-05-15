import express from 'express'
import { messageController } from './message.controler'

const router = express.Router()

router.post('/send-message', messageController.createMessage)
router.get('/', messageController.getAllMessage)
router.delete('/:id', messageController.deleteMessage)

export const messageRoute = router
