import { useContext } from "react";
import { IRootStore } from "../dataLayer/stores/RootStore";
import React from "react";

const dummyRootStore: IRootStore = new Proxy({} as IRootStore, {
  get() {
    throw new Error("No StoreProvider in React tree to provide root store.");
  },
});

const RootStoreContext = React.createContext<IRootStore>(dummyRootStore);
export const RootStoreProvider: React.Provider<IRootStore> = RootStoreContext.Provider;

export const useRootStore = (): IRootStore => useContext(RootStoreContext);
