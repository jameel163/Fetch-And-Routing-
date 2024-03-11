import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogItems: [], isLoading: true}

  componentDidMount() {
    this.gettinBlog()
  }

  gettinBlog = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const newObject = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogItems: newObject, isLoading: false})
  }

  render() {
    const {blogItems, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogItems.map(each => <BlogItem details={each} key={each.id} />)
        )}
      </div>
    )
  }
}
export default BlogList
