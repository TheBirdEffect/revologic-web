import { ReactElement } from "react";

export interface RouteObject {
    path: string | string[];
    element: ReactElement;
    children?: RouteObject[];
}