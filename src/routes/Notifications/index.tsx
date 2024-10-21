import { useLocation } from "react-router-dom";
import "./styles.scss"
import { FC, useEffect, useRef, useState } from "react";
import Notification from "../../components/notification";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node) && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div ref={notificationsRef} className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Notifications</h2>
      <Notification profilePic={"https://www.veteralia.com/wp-content/uploads/2017/03/Intro.jpg"} message={"uwu"} time={"7h"} />
      {/*Habría que mapear esto despues con las notificaciones y como corresponda*/ }
    </div>
  );
}

export default Notifications;
