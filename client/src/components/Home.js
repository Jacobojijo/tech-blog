import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
    const { data:blogs, loading } = useFetch('http://localhost:8000/blogs')

  return (
      <div className='home'>
          { loading && <div> Loading...</div>}
        <Bloglist blogs={blogs} title="All Blogs"/>
      </div>
  )
}

export default Home