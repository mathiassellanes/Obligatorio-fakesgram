import React from 'react';
import { useStore } from '../../store';

const Profile = () => {
  const { username, profilePic, posts } = useStore();

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>{username}</h2>
        <button>Edit Profile</button>
      </div>

      <div className="post-grid">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <img src={post} alt={`post-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
