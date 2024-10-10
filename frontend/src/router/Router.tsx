import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IRouterProps } from "./IRouterProps";
import Header from "../components/Base/Header/Header";
import Footer from "../components/Base/Footer/Footer";
import { observer } from "mobx-react-lite";
import resolvePaths from "./Routes/Routes";
export const Router: React.FC<IRouterProps> = () => {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Header />
      <Routes>
        {resolvePaths().map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default observer(Router);
