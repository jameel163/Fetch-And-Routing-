import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, author, avatarUrl, imageUrl, topic, title} = details
  return (
    <Link to={`/blogs/${id}`}>
      <div className="list-container">
        <img src={imageUrl} alt={topic} className="list-image" />
        <div className="list-content-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} className="avatarUrl" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
