import { atom } from 'recoil'

export const mbtiAtom = atom<string[]>({
  key: 'mbti',
  default: [],
})
