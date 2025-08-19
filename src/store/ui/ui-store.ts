import { create } from 'zustand'

interface State {
  isFilterPanelOpen: boolean,
  openFilterPanel: () => void,
  closeFilterPanel: () => void
}

export const useUIStore = create<State>()((set) => ({
  isFilterPanelOpen: false,
  openFilterPanel: () => set({ isFilterPanelOpen: true }),
  closeFilterPanel: () => set({ isFilterPanelOpen: false})
}));