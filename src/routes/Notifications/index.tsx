import { useLocation } from "react-router-dom";
import "./styles.scss"
import { FC, useEffect, useRef, useState } from "react";
import Notification from "../../components/notification";
import { getNotifications } from "../../api";

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
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node) && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
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
          <Notification profilePic={notification.userFrom.profilePicture} type={notification.type} createdAt={notification.createdAt} userFrom={notification.userFrom} />
        ))
      }
      {/*Habría que mapear esto despues con las notificaciones y como corresponda*/}
    </div>
  );
}

export default Notifications;
