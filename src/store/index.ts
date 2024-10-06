import { create } from 'zustand'

type Store = {
  posts: string[]
}

export const useStore = create<Store>((set) => ({
  posts: [],
}))
