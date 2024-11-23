import { FC, useEffect, useRef, useState } from "react";
import Notification from "../../components/notification";
import { getNotifications } from "../../api/notifications";

import "./styles.scss"
interface NotificationsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const Notifications: FC<NotificationsProps> = ({
  isOpen,
  setIsOpen,
  sidebarRef
}) => {
  const notificationsRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState([]);

  const handleGetNotifications = async () => {
    const response = await getNotifications();

    setNotifications(response);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current
        && !notificationsRef.current.contains(event.target as Node)
        && sidebarRef.current
        && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    handleGetNotifications();

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div ref={notificationsRef} className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Notifications</h2>
      {
        notifications.map((notification, index) => (
          <Notification profilePic={notification.fromUserId.profilePicture} type={notification.type} createdAt={notification.createdAt} userFrom={notification.fromUserId} />
        ))
      }
    </div>
  );
}

export default Notifications;
