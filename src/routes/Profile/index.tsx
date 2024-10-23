import React, { useEffect, useState } from 'react';
import { useStore } from '../../store';
import './styles.scss';

import './styles.scss';
import { profileById } from '../../api';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    id: '',
    username: '',
    avatarUrl: '',
    posts: 0,
    friends: 0,
    bio: '',
    photos: [],
  });

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
        <img src={profileInfo.avatarUrl} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h2>{profileInfo.username}</h2>
          <p>{profileInfo.posts} posts | {profileInfo.friends} friends</p>
          <p>{profileInfo.bio}</p>

        </div>
        <div className="profile-buttons">
        <button>Editar Perfil</button>
        <button>Agregar amigo?</button>
        </div>

      </div>
      <div className="profile-gallery">
        {profileInfo.photos.map((photo, index) => (
          <img key={index} src={photo} alt="user post" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
