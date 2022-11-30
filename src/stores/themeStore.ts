import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type DarkState = {
  dark: Boolean;
  setDark: (newDark: Boolean) => void;
  changeDark: () => void;
};

export const useThemeStore = create<DarkState>()(
  persist(
    set => ({
      dark: false,
      setDark: (newDark: Boolean) => set(() => ({ dark: newDark })),
      changeDark: () => set(state => ({ dark: !state.dark })),
    }),
    {
      name: 'dark',
      getStorage: () => AsyncStorage,
    },
  ),
);
// export const useThemeStore = create(set => ({
//   dark: 'false',
//   setDark: (newDark: Boolean) => set(() => ({ dark: newDark })),
//   changeDark: () => set((state: darkStore) => ({ dark: !state.dark })),
// }));
