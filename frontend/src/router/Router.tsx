import { BrowserRouter, Routes } from "react-router-dom";
import { IRouterProps } from "./IRouterProps";

export const Router: React.FC<IRouterProps> = ({children}) => {
    return (
        <BrowserRouter basename="/" future={{v7_startTransition: true}}>
            <Routes>
                {children}
            </Routes>
        </BrowserRouter>
    );
}