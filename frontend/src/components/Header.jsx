import React from "react";
import { tw } from "twind";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

export default function Header( {logOut} ) {

    const location = useLocation();
    const isCompletedRoute = location.pathname === '/completed';
    const isActiveRoute = location.pathname === '/active';
    const isAllRoute = location.pathname === '/loggedin';

    const completedColor = isCompletedRoute ? 'text-green-500 font-extrabold' : 'text-black';
    const activeColor = isActiveRoute ? 'text-green-500 font-extrabold' : 'text-black';
    const allColor = isAllRoute ? 'text-green-500 font-extrabold' : 'text-black';

    return (
        <div className={tw`text-center leading-8 pt-4 mx-auto`}>
            <a
                href='https://github.com/marshennikovaolga'
                className={tw`pl-4 text-gray hover:text-gray-200
        active:text-gray-900 transition duration-300 flex`}
            >
                <FontAwesomeIcon icon={faGithub} className={tw`mr-2 text-xl`} />
            </a>
            <nav>
                <Link to='/login' className={tw`pr-6 mb-5 font-chillax font-xl text-right`}
                onClick={logOut}
                >
                    <FontAwesomeIcon className={tw`mr-2`} icon={faSignOut} />
                    sign out
                </Link>
                <ul className={tw`flex flex-col`}>
                    <li className={tw`${completedColor} font-chillax pr-6 text-right`}>
                        <NavLink to="/completed">Completed</NavLink></li>
                    <li className={tw`${activeColor} font-chillax pr-6 text-right`}>
                        <NavLink to="/active">Active</NavLink></li>
                    <li className={tw`${allColor} font-chillax pr-6 text-right`}>
                        <NavLink to="*">All</NavLink></li>
                </ul>
            </nav>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>TODO list</h1>
        </div>
    );
}