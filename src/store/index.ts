import { create } from 'zustand';

interface UserInfo {
  id: string;
  username: string;
}

interface StoreState {
  user: UserInfo;
  setUser: (user: UserInfo) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: {
    id: '',
    username: '',
  },
  setUser: (user: UserInfo) => set({ user }),
}));
