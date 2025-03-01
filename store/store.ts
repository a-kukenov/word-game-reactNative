import {create} from 'zustand';

interface IStore {
  tasks: object[];
  newTask: (value: object) => void;
  deleteTask: (index: number) => void;
}
const useStore = create<IStore>((set) => ({
  tasks: [],
  newTask: (value: object) => set((state) => ({ tasks: [...state.tasks, value] })),
  deleteTask: (index: number) => set((state) => ({ tasks: state.tasks.filter((task, ind) => {return ind !== index}) })),
}));

export default useStore;