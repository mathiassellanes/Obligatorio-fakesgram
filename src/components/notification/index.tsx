import React from 'react';
import './styles.scss';

interface NotificationProps {
    profilePic: string;
    message: string;
    time: string,
}

const Notification: React.FC<NotificationProps> = ({ profilePic, message, time }) => {
    return (
        <div className="notification">
            <img src={profilePic} className="notification-profile-pic" />
            <div className="notification-content">
                <p className="notification-message">{message}</p>
                <span className="notification-time">{time}</span>
            </div>
        </div>
    );
};

export default Notification;