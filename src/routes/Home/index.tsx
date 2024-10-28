import { useEffect, useState } from 'react';

import { feed } from '../../api';

import Post from '../../components/post';

import './styles.scss';

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
    <div className="home">
      <div className="posts">
        {posts.map((post: any) => (
          <Post
            key={post.id}
            imageUrl={post.imageUrl}
            description={post.caption}
            user={post.user}
          />
        ))}
      </div>
    </div>

  );
};

export default Home;
