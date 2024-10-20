import { useLocation } from "react-router-dom";
import "./styles.scss"
import { useEffect, useState } from "react";
import Notification from "../../components/notification";

const Notifications = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (location.pathname === '/notifications') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Notifications</h2>
      <Notification profilePic={"https://www.veteralia.com/wp-content/uploads/2017/03/Intro.jpg"} message={"uwu"} time={"7h"} /> 
      {/*Habría que mapear esto despues con las notificaciones y como corresponda*/ }
    </div>
  );
}

export default Notifications;
