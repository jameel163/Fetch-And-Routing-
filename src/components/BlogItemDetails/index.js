import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const newObject = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDetails: newObject})
  }

  render() {
    const {blogDetails} = this.state
    const {author, avatarUrl, imageUrl, content, title} = blogDetails
    return (
      <div className="blogDetails-container">
        <h1 className="blogDetails-title">{title}</h1>
        <div className="blogDetails-author-container">
          <img src={avatarUrl} className="blogDetails-avatarUrl" alt={author} />
          <p className="blogDetails-author">{author}</p>
        </div>
        <img src={imageUrl} className="blogDetails-imageUrl" alt={title} />
        <p className="blogDetails-content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
