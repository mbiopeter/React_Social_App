import Posts from "../../components/posts/Posts"
import Stories from "../../components/stories/Stories"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts />
    </div>
  )
}

export default Home
