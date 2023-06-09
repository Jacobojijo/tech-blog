import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className='create'>
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog author:</label>
          <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />
          <label >Blog body: </label>
          <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
          <button>Add Blog</button>
          <p>{title}</p>
          <p>{author}</p>
          <p>{body}</p>
        </form>
    </div>
  )
}

export default Create