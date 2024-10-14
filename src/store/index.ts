import { create } from 'zustand'

type Store = {
  posts: string[],
  username: string,
  profilePic: string,
  friendUsername: string,
  friendProfilePic: string,
  friendPosts: string[],
  isFriend: boolean
}

export const useStore = create<Store>((set) => ({
  posts: [],
  username: 'defaultUsername',
  profilePic: '/defaultProfilePic.png',
  friendUsername: 'FriendUsername',
  friendProfilePic: '/defaultFriendPic.png',
  friendPosts: [],
  isFriend: false,
}));


