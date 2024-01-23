import { create } from 'zustand'
export const useLangStore = create((set) => ({
  lang: 'zh',
  toEn: () => set((state) => ({ lang: 'en' })),
  toZh: () => set({ lang: 'zh' }),
}))