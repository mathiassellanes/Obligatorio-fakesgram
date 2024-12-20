import homeIcon from '../../assets/home.svg';
import notificationIcon from '../../assets/notifications.svg';
import logoutIcon from '../../assets/logout.svg';
import loginIcon from '../../assets/login.svg';

export const sidebarLoggedInOptions = [
  {
    name: 'Inicio',
    to: '',
    icon: homeIcon
  },
  {
    name: 'Notificaciones',
    icon: notificationIcon
  },
  {
    name: 'Perfil',
    to: 'profile',
  },
  {
    name: 'Cerrar sesión',
    icon: logoutIcon
  }
];

export const sidebarLoggedOutOptions = [
  {
    name: 'Inicio',
    icon: homeIcon
  },
  {
    name: 'Iniciar sesión',
    icon: loginIcon,
    to: 'login'
  }
];
