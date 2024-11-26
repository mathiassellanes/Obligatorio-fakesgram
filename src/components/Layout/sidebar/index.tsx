import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cs from "classnames";

import { sidebarLoggedInOptions } from "../../../utils/constants/sidebarOptions";

import { FaUserCircle } from 'react-icons/fa';

import Notifications from "../../../routes/Notifications";
import { routes } from "../../../utils/constants/routes";

import './styles.scss'

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const user = JSON.parse(localStorage.getItem('user') || '');

  const handleClicked = (option: string) => {
    switch (option) {
      case 'Cerrar sesión':
        navigate(routes.auth.login.complete);
        localStorage.removeItem('token');

        break;
      case 'Notificaciones':
        setIsOpen(!isOpen);

        break;
      default:
        break;
    }
  }

  const sidebarOption = sidebarLoggedInOptions;

  return (
    <>
      <div ref={sidebarRef} className="sidebar">
        <h1 className="sidebar__title">Fakestagram</h1>
        <div className="sidebar__options">
          {
            sidebarOption.map((option, index) => (
              option.to !== undefined ? (
                <NavLink
                  to={option.to}
                  className={(value) => cs("sidebar__option", {
                    "sidebar__option--selected": value.isActive
                  })
                  }
                  key={index}
                >
                  {
                    user.profilePicture === '' && !option.icon ?
                      <FaUserCircle className="sidebar__option-image" /> : (
                        <img
                          className={cs("sidebar__option-image", {
                            "sidebar__option-image--user": !option.icon
                          })}
                          src={option.icon || user.profilePicture}
                          alt={option.name}
                        />
                      )
                  }
                  <span className="sidebar__option-description">{option.name}</span>
                </NavLink>
              ) : (
                <div
                  className="sidebar__option"
                  key={index}
                  onClick={() => handleClicked(option.name)}
                >
                  <img
                    className={cs("sidebar__option-image", {
                      "sidebar__option-image--user": !option.icon
                    })}
                    src={option.icon || image}
                    alt={option.name}
                  />
                  <span className="sidebar__option-description">{option.name}</span>
                </div>
              )
            ))
          }
        </div>
      </div>
      <Notifications sidebarRef={sidebarRef} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}

export default Sidebar;
