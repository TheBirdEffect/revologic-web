
import { About } from '../../pages/About/About'; // Adjust the path as necessary
import Home from "../../pages/Home/Home";
import { Services } from "../../pages/Services/Services";
import { Projects } from "../../pages/Projects/Projects";
import { Contact } from "../../pages/Contact/Contact";
import { useCallback } from 'react';
import { RouteObject } from 'react-router-dom';

interface RouteConfig {
    path: string | string[];
    element: JSX.Element;
}

const routes: RouteConfig[] = [
    {
        path: ['/', '/home'],
        element: <Home />, 
    },
    {
        path: '/services',
        element: <Services />
    },    
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]

const resolvePaths = () => {
    let pathList: RouteObject[] = [];
    routes.forEach(route => {
        if (Array.isArray(route.path)) {
            pathList = pathList.concat(route.path.map(path => ({ path, element: route.element })));
        } else {
            pathList.push({ path: route.path, element: route.element });
        }
    });
    return pathList;
};


export default resolvePaths; // Adjust the export as necessary;