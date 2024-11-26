import { useEffect, useState } from 'react';

import { feed } from '../../api/post';

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

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post: any) => (
          <Post
            key={post._id}
            imageUrl={post.imageUrl}
            description={post.caption}
            id={post._id}
            userId={post.user._id}
            username={post.user.username}
            comments={post.comments}
            profilePicture={post.user.profilePicture}
            likes={post.likes}
          />
        ))}
      </div>
    </div>

  );
};

export default Home;
