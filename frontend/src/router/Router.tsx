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

export default observer(Router);