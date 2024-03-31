import { atom } from 'recoil'

export const sampleAtom = atom<string>({
  key: 'sampleAtom',
  default: '리코일샘플',
})
