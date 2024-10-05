import { BrowserRouter, Routes } from "react-router-dom";
import { IRouterProps } from "./IRouterProps";
import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import { observer } from "mobx-react-lite";

export const Router: React.FC<IRouterProps> = ({children}) => {
    return (
        <BrowserRouter basename="/" future={{v7_startTransition: true}}>
            <Header />
            <Routes>
                {children}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

// TODO: Turn routing system like this: https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router

export default observer(Router);