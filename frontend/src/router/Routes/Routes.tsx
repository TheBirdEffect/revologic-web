
import { About } from '../../pages/About/About'; // Adjust the path as necessary
import Home from "../../pages/Home/Home";
import { Services } from "../../pages/Services/Services";
import { Projects } from "../../pages/Projects/Projects";
import { Contact } from "../../pages/Contact/Contact";

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

const pathResolver = () => {
    let pathList: string[] = [];
    routes.forEach(route => {
        if (Array.isArray(route.path)) {
            pathList = pathList.concat(route.path);
        } else {
            pathList.push(route.path);
        }
    });
    return pathList;
}

export default pathResolver;