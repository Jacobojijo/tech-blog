import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, loading } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
        {loading && <div>Loading...</div>}
        { blog && (
            <article>
                <h2>Written by { blog.author }</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        )}
    </div>
  )
}

export default BlogDetails