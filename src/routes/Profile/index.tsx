import React from 'react';
import { useStore } from '../../store';
import './styles.scss';

const Profile = () => {
  const userInfo = useStore((state) => state.userInfo);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userInfo.avatarUrl} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h2>{userInfo.username}</h2>
          <p>{userInfo.posts} posts | {userInfo.friends} friends</p>
          <p>{userInfo.bio}</p>

        </div>
        <div className="profile-buttons">
        <button>Editar Perfil</button>
        <button>Agregar amigo?</button>
        </div>

      </div>
      <div className="profile-gallery">
        {userInfo.photos.map((photo, index) => (
          <img key={index} src={photo} alt="user post" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
