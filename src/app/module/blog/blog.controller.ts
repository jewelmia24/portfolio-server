import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { blogService } from './blog.service'

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.createBlog(req.body)
  res.status(201).json({
    success: true,
    message: 'Blog create successfully!',
    data: result,
  })
})

const addComment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await blogService.addComment(req.body, id)
  res.status(201).json({
    success: true,
    message: 'Comment added successfully!',
    data: result,
  })
})

const getBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogService.getBlog()
  res.status(201).json({
    success: true,
    message: 'Blogs get successfully!',
    data: result,
  })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await blogService.getSingleBlog(id)
  res.status(201).json({
    success: true,
    message: 'Blog get successfully!',
    data: result,
  })
})
export const blogController = {
  createBlog,
  addComment,
  getBlog,
  getSingleBlog,
}
