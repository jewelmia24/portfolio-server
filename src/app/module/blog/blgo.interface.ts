export type TComment = {
  name: string
  comment: string
}

export type TBlog = {
  title: string
  content: string
  image: string
  author: string
  comments?: TComment[]
}
