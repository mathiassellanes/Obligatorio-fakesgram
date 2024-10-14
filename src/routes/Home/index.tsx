import { useEffect, useState } from 'react';
import './styles.scss';
import { feed } from '../../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchFeed = async () => {
    const getFeed = await feed();

    setPosts(getFeed);
  }

  useEffect(() => {
    fetchFeed();
  }, []);

  console.log(posts);

  return (
    <div className="posts">
      {
        posts.map((post: any) => (
          <div key={post.id}>
            <img src={`http://localhost:3001/${post.imageUrl}`} alt="" />
          </div>
        ))
      }
    </div>
  );
}

export default Home;
