import { NavLink, useNavigate } from "react-router-dom";
import cs from "classnames";

import { sidebarLoggedInOptions, sidebarLoggedOutOptions } from "../../../utils/constants/sidebarOptions";

import './styles.scss'
import { routes } from "../../../utils/constants/routes";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClicked = (option: string) => {
    switch (option) {
      case 'Login':
        navigate(routes.auth.login.complete);

        break;
      case 'Logout':
        navigate(routes.auth.login.complete);
        localStorage.removeItem('token');

        break;
      default:
        console.log('default');
        break;
    }
  }

  const sidebarOption = sidebarLoggedInOptions;

  const image = 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg'

  return (
    <div className="sidebar">
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
                <img
                  className={cs("sidebar__option-image", {
                    "sidebar__option-image--user": !option.icon
                  })}
                  src={option.icon || image}
                  alt={option.name}
                />
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
  )
}

export default Sidebar;
