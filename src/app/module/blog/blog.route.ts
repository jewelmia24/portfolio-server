import express from 'express'
import { blogController } from './blog.controller'
const router = express.Router()

router.post('/create-blog', blogController.createBlog)
router.patch('/add-comment/:id', blogController.addComment)
router.get('/', blogController.getBlog)
router.get('/:id', blogController.getSingleBlog)

export const blogRouter = router
