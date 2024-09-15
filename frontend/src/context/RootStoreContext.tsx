import { useContext } from "react";
import { IRootStore } from "../dataLayer/stores/RootStore";
import React from "react";

// const RootStoreContext = createContext<IRootStore | null>(null);

// export const RootStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const rootStore = RootStore.create({});
//     return (
//         <RootStoreContext.Provider value={rootStore}>
//             {children}
//         </RootStoreContext.Provider>
//     );
// };

// export const useRootStore = () => {
//     const store = useContext(RootStoreContext);
//     if (!store) {
//         throw new Error("useRootStore must be used within a RootStoreProvider");
//     }
//     return store;
// };

const dummyRootStore: IRootStore = new Proxy({} as IRootStore, {
  get() {
    throw new Error("No StoreProvider in React tree to provide root store.");
  },
});

const RootStoreContext = React.createContext<IRootStore>(dummyRootStore);
export const RootStoreProvider: React.Provider<IRootStore> = RootStoreContext.Provider;

export const useRootStore = (): IRootStore => useContext(RootStoreContext);
