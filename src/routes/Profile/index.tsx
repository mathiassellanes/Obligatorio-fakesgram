import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { addFriend, profileById, removeFriend, updateProfile } from '../../api/user';

import Button from '../../components/button';

import './styles.scss';
import { FaUserCircle } from 'react-icons/fa';

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
  const user = JSON.parse(localStorage.getItem('user'));

  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const profileId = useParams<{ id: string }>().id;
  const [userAdded, setUserAdded] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProfile = async () => {
    const profile = await profileById(profileId || user._id);
    setProfileInfo(profile);
    setUsername(profile.user.username);
    setProfilePicture(profile.user.profilePicture);
    setUserAdded(profile.user.friends.find(friend => friend._id === user._id));
  }

  const handleEditProfile = async () => {
    try {
      await updateProfile(user._id, { username, profilePicture });

      setProfileInfo(prev => ({
        ...prev,
        user: { ...prev.user, username, profilePicture }
      }));

      setIsEditing(false);

      localStorage.setItem('user', JSON.stringify({
        ...user,
        username,
        profilePicture
      }));
    } catch (error) {
      console.error("Error al actualizar el perfil", error);
    }
  }

  const handleAddUser = async () => {
    try {
      if (userAdded) {
        await removeFriend(profileId);

        setProfileInfo(prev => ({
          ...prev,
          user: {
            ...prev.user,
            friends: prev.user.friends.filter(friend => friend._id !== user._id)
          }
        }));
      } else {
        await addFriend(profileId);

        setProfileInfo(prev => ({
          ...prev,
          user: {
            ...prev.user,
            friends: [...prev.user.friends, user]
          }
        }));
      }

      setUserAdded((prev) => !prev);
    } catch (error) {
      console.error("Error al agregar amigo", error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [profileId]);

  const ShowEditButton = () => (isEditing ? (
    <>
      <Button label={'Guardar'} onClick={handleEditProfile} />
      <Button label={'Cancelar'} onClick={() => setIsEditing(false)} />
    </>
  ) : (
    <Button label={'Editar'} onClick={() => setIsEditing(true)} />
  ))

  return (
    <div className="profile-container">
      <div className="profile-header">
        {profileInfo.user.profilePicture
          ? <img src={profileInfo.user.profilePicture} alt="avatar" className="avatar" />
          : <FaUserCircle className="avatar" />
        }
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
          {
            profileId ? (
              <Button
                label={userAdded ? 'Desagregar' : 'Agregar'}
                onClick={handleAddUser}
              />
            ) : (
              <ShowEditButton />
            )
          }
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
