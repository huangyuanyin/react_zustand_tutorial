import { create } from 'zustand'

type TBearStoreState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
  // getOwner: () => Promise<string>
}

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1
    })),
  removeAllBears: () => set({ bears: 0 })
  // getOwner: async () => {
  //   const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  //   const owner = await response.json()
  //   return owner.name
  // }
}))
