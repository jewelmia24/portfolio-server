import mongoose from 'mongoose'
import { TBlog, TComment } from './blgo.interface'

const commentSchema = new mongoose.Schema<TComment>(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const blogSchema = new mongoose.Schema<TBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  comments: {
    type: [commentSchema],
    default: [],
  },
})

const Blog = mongoose.model<TBlog>('Blog', blogSchema)

export default Blog
