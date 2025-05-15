import { TBlog, TComment } from './blgo.interface'
import Blog from './blog.model'

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload)
  return result
}

const addComment = async (payload: TComment, id: string) => {
  const blog = await Blog.findById(id)

  if (!blog) {
    throw new Error('blog not found')
  }
  blog.comments?.push(payload)
  const result = await blog.save()
  return result
}

const getBlog = async () => {
  const result = await Blog.find()
  return result
}

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

export const blogService = {
  createBlog,
  addComment,
  getBlog,
  getSingleBlog,
}
