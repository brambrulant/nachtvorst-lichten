import React from 'react'
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0
import { TStore, userStore } from './UserStore'

const storeContext = React.createContext<TStore | null>(null)

export const StoreProvider = ({ children }: any) => {
  const store = useLocalStore(userStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
