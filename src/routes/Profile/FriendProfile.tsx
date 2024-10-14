import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store';

const FriendProfile = () => {
    const { friendUsername } = useParams();
    const { friendProfilePic, friendPosts, isFriend } = useStore();

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={friendProfilePic} alt="Friend Profile" className="profile-pic" />
                <h2>{friendUsername}</h2>
                <button>{isFriend ? 'Friend' : 'Add friend'}</button>
            </div>

            <div className="post-grid">
                {friendPosts.map((post, index) => (
                    <div key={index} className="post">
                        <img src={post} alt={`post-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendProfile;
