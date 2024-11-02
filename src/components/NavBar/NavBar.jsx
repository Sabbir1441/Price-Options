import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiCloseFill } from "react-icons/ri";


const NavBar = () => {

    const [open , setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/home', name: 'Home' }, 
        { id: 2, path: '/about', name: 'About' }, 
        { id: 3, path: '/services', name: 'Services' }, 
        { id: 4, path: '/contact', name: 'Contact' }, 
        { id: 5, path: '/blog', name: 'Blog' }
    ];


    return (
        <nav className="text-black bg-red-300 p-4">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?  <RiCloseFill></RiCloseFill>
                    : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                ${open ? 'top-12' : '-top-52'}
                bg-red-300 pl-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;