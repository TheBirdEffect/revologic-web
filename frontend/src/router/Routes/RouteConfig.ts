import { ReactElement } from "react";

export interface RoutConfig {
    path: string | string[];
    element: ReactElement;
    children?: RoutConfig[];
}