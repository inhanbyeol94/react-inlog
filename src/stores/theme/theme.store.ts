import { create } from 'zustand';
import { IThemeStore } from './theme.interface';

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: '',
  setTheme: (theme) => set((state) => ({ theme })),
}));
