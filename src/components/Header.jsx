import React from "react";
import { tw } from "twind";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

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
                <ul className={tw`flex flex-col`}>
                    <li className={tw`font-chillax pr-6 text-right`}><NavLink to="/completed">Completed</NavLink></li>
                    <li className={tw`font-chillax pr-6 text-right`}><NavLink to="/active">Active</NavLink></li>
                    <li className={tw`font-chillax pr-6 text-right`}><NavLink to="/" end>All</NavLink></li>
                </ul>
            </nav>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>TODO list</h1>
        </div>
    );
}