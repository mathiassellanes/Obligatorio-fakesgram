import { create } from 'zustand';

interface UserInfo {
  username: string;
  posts: number;
  friends: number;
  avatarUrl: string;
  bio: string;
  photos: string[];
}

interface StoreState {
  userInfo: UserInfo;
}

export const useStore = create<StoreState>((set) => ({
  userInfo: {
    username: 'john_doe',
    posts: 11,
    friends: 17,
    avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'Por ahora son solo imagenes de gatos random! 🌍',
    photos: [
      'https://loremflickr.com/200/200?random=1',
      'https://loremflickr.com/200/200?random=2',
      'https://loremflickr.com/200/200?random=3',
      'https://loremflickr.com/200/200?random=4',
      'https://loremflickr.com/200/200?random=5',
      'https://loremflickr.com/200/200?random=6',
      'https://loremflickr.com/200/200?random=7',
      'https://loremflickr.com/200/200?random=8',
      'https://loremflickr.com/200/200?random=9',
      'https://loremflickr.com/200/200?random=10',
      'https://loremflickr.com/200/200?random=11',
      'https://loremflickr.com/200/200?random=12',
    ],
  },
}));
