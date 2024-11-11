import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { profileById } from '../../api';

import Button from '../../components/button';

import { routes } from '../../utils/constants/routes';

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

  const profileId = useParams<{ id: string }>().id;

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchProfile = async () => {
    const user = localStorage.getItem('user')

    const profile = await profileById(profileId || JSON.parse(user)._id);

    setProfileInfo(profile);
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
          <h2>{profileInfo.user.username}</h2>
          <p>{profileInfo.posts.length} posts | {profileInfo.user.friends.length} friends</p>
          {/* <p>{profileInfo.bio}</p> */}

        </div>
        <div className="profile-buttons">
          <Button
            label={location.pathname === routes.base.profile.complete ? 'Editar' : 'Agregar'}
            onClick={() => {
              if (location.pathname === routes.base.profile.complete) {
                console.log('Editar');
              } else {
                console.log('Agregar');
              }
            }}
          />

        </div>

      </div>
      <div className="profile-gallery">
        {profileInfo.posts.map((post, index) => (
          <div className="profile-gallery-post"><img key={index} src={`${API_URL}/${post.imageUrl}`} /> </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
