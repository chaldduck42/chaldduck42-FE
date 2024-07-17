import { MbtiList } from '@/types/mbti'
import { atom } from 'recoil'

export const mbtiAtom = atom<MbtiList[]>({
  key: 'mbti',
  default: [],
})
