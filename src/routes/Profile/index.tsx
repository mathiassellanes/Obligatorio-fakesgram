import React, { useEffect, useState } from 'react';
import { useStore } from '../../store';
import './styles.scss';

import './styles.scss';
import { profileById } from '../../api';
import Button from '../../components/button';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    user: {
      id: '',
      username: '',
      profilePicture: '',
      email: '',
      createdAt: '',
      friends: [],
    },
    posts: []
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProfile = async () => {
    const user = localStorage.getItem('user')

    console.log(user)

    const profile = await profileById(JSON.parse(user)._id);

    setProfileInfo(profile);
  }

  useEffect(() => {
    fetchProfile();
  }, []);


  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileInfo.user.profilePicture} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h2>{profileInfo.user.username}</h2>
          <p>{profileInfo.posts.length} posts | {profileInfo.user.friends.length} friends</p>
          {/* <p>{profileInfo.bio}</p> */}

        </div>
        <div className="profile-buttons">
          <Button label={'Editar'} onClick={function (e: React.MouseEvent<HTMLButtonElement>): void {
            throw new Error('Function not implemented.');
          } } />
          <Button label={'Agregar'} onClick={function (e: React.MouseEvent<HTMLButtonElement>): void {
            throw new Error('Function not implemented.');
          } } />
        </div>

      </div>
      <div className="profile-gallery">
        {profileInfo.posts.map((post, index) => (
          <div className="profile-gallery-post"><img key={index} src={`${API_URL}/${post.imageUrl}`}  /> </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
