import { create } from 'zustand'

type MaterialType = 'cotton' | 'silk' | 'leather' | 'velvet' // etc

interface PillowState {
  color: string
  material: MaterialType
  setColor: (color: string) => void
  setMaterial: (material: MaterialType) => void
}

export const usePillowStore = create<PillowState>((set) => ({
  color: '#ffffff',       // default white
  material: 'cotton',     // default material
  setColor: (color) => set({ color }),
  setMaterial: (material) => set({ material }),
}))
