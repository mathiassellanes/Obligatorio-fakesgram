import { NavLink } from "react-router-dom";
import cs from "classnames";

import { sidebarLoggedInOptions, sidebarLoggedOutOptions } from "../../../utils/constants/sidebarOptions";

import './styles.scss'

const Sidebar = () => {
  const handleClicked = (option: string) => {
    switch (option) {
      case 'Login':
        console.log('login');
        break;
      case 'Logout':
        console.log('logout');
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
