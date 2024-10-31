import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { profileById, updateProfile } from '../../api';

import Button from '../../components/button';

import './styles.scss';

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

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const profileId = useParams<{ id: string }>().id;

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProfile = async () => {
    const user = localStorage.getItem('user');
    const profile = await profileById(JSON.parse(user)._id);
    setProfileInfo(profile);
    setUsername(profile.user.username);
    setProfilePicture(profile.user.profilePicture);
  }

  const handleEditProfile = async () => {
    try {
      const user = localStorage.getItem('user');
      const response = await updateProfile(JSON.parse(user)._id, { username, profilePicture });
      setProfileInfo(prev => ({
        ...prev,
        user: { ...prev.user, username, profilePicture }
      }));
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar el perfil", error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [profileId]);

  const location = useLocation();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileInfo.user.profilePicture} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h2>
            {isEditing ? (
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nuevo nombre de usuario"
                className="fakestagram-input"
              />
            ) : (
              profileInfo.user.username
            )}
          </h2>
          <p>{profileInfo.posts.length} posts | {profileInfo.user.friends.length} friends</p>
          {isEditing && (
            <input
              type="text"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              placeholder="URL de la nueva foto de perfil"
            />
          )}
        </div>
        <div className="profile-buttons">
          {isEditing ? (
            <>
              <Button label={'Guardar'} onClick={handleEditProfile} />
              <Button label={'Cancelar'} onClick={() => setIsEditing(false)} />
            </>
          ) : (
            <Button label={'Editar'} onClick={() => setIsEditing(true)} />
          )}
          <Button label={'Agregar'} onClick={() => {  }} />
        </div>
      </div>
      <div className="profile-gallery">
        {profileInfo.posts.map((post, index) => (
          <div className="profile-gallery-post" key={index}>
            <img src={`${API_URL}/${post.imageUrl}`} alt={`Post ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
