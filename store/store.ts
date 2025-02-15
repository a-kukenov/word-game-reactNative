import {create} from 'zustand';

interface IStore {
  difficulty: 1 | 2 | 3,
  setDifficulty: (state: 1 | 2 | 3) => void,
}
const useStore = create<IStore>((set) => ({
  difficulty: 1,
  setDifficulty: (value: 1 | 2 | 3) => set((state) => ({ difficulty: value }))
}));

export default useStore;