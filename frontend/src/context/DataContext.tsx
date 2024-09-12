import { createContext, useContext } from "react";
import { IRootStore, RootStore } from "../dataLayer/stores/RootStore";
import React from "react";

const RootStoreContext = createContext<IRootStore | null>(null);

export const RootStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const rootStore = RootStore.create({});
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export const useRootStore = () => {
    const store = useContext(RootStoreContext);
    if (!store) {
        throw new Error("useRootStore must be used within a RootStoreProvider");
    }
    return store;
};