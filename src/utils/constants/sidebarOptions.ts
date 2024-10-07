import homeIcon from '../../assets/home.svg';
import notificationIcon from '../../assets/notifications.svg';
import createIcon from '../../assets/create.svg';
import logoutIcon from '../../assets/logout.svg';
import loginIcon from '../../assets/login.svg';

export const sidebarLoggedInOptions = [
  {
    name: 'Home',
    to: '',
    icon: homeIcon
  },
  {
    name: 'Notifications',
    to: 'notifications',
    icon: notificationIcon
  },
  {
    name: 'Create',
    to: 'create',
    icon: createIcon
  },
  {
    name: 'Profile',
    to: 'profile',
  },
  {
    name: 'Logout',
    icon: logoutIcon
  }
];

export const sidebarLoggedOutOptions = [
  {
    name: 'Home',
    icon: homeIcon
  },
  {
    name: 'Login',
    icon: loginIcon,
  }
];
