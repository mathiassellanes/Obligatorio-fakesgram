import React from 'react';
import './styles.scss';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

interface NotificationProps {
    profilePic: string;
    type: string;
    createdAt: string,
    userFrom: {
        username: string;
    }
}

const Notification: React.FC<NotificationProps> = ({ profilePic, type, createdAt, userFrom }) => {
    const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

    const notificationsType = {
        POST_COMMENT: 'POST_COMMENT',
        POST_LIKE: 'POST_LIKE',
        USER_FOLLOW: 'USER_FOLLOW',
    }

    const message = {
        [notificationsType.POST_COMMENT]: 'comentó en tu post',
        [notificationsType.POST_LIKE]: 'le gustó tu post',
        [notificationsType.USER_FOLLOW]: 'te ha seguido',
    }

    return (
        <div className="notification">
            <Link to={`/profile/${userFrom._id}`} className="notification-link">
                <img src={profilePic} className="notification-profile-pic" />
            </Link>
            <div className="notification-content">
                <p className="notification-message">{`${userFrom.username} ${message[type]}`}</p>
                <span className="notification-time">{timeAgo}</span>
            </div>
        </div>
    );
};

export default Notification;
