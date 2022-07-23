import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/User';
const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    const [hidde, setHidde] = useState(false);
    const postLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }
    const handleMenu = () => {
        setHidde(!hidde);
    }
    return(
        
<div>
    <nav className="bg-emerald-400 dark:bg-gray-800  ">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <a className="flex-shrink-0" href="/">
                        <img className="w-16" src="https://cap.miposvirtual.com/images/logo.png" alt="Workflow"/>
                    </a>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link className="text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                                Recepciones
                            </Link>
                            <Link className="text-white dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/diagnosticos">
                                Diagnóstico
                            </Link>
                            <button className="text-white dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={postLogout}>
                                Cerrar Sesion
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button onClick={handleMenu} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={hidde ? "md:hidden" : "hidden"}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link className="text-white hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/recepciones">
                    Recepciones
                </Link>
                <Link className="text-white hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/diagnosticos">
                    Diagnóstico
                </Link>
                <hr className="text-current" />
                <button className="text-white dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={postLogout}>
                    Cerrar Sesion
                </button>
            </div>
        </div>
    </nav>
</div>

    );
}

export default NavBar;