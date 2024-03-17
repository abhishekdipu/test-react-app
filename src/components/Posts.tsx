import React, {useState, useEffect} from 'react';
import axios from '../services';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getPosts = async () => {
    try {
      const res = await axios.get('/posts');
      setPosts(res.data as Post[]);
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {errorMessage !== '' ? (
        <h2>{errorMessage}</h2>
      ) : (
        <div className="grid">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
