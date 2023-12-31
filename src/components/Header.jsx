import React from "react";
import { tw } from "twind";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className={tw `text-center leading-8 pt-4 mx-auto`}>
                <nav>
                    <ul className={tw `flex flex-col`}>
                    <li className={tw `font-chillax pr-6 text-right`}><Link to="/completed">completed</Link></li>
                    <li className={tw `font-chillax pr-6 text-right`}><Link to="/active">active</Link></li>
                    <li className={tw `font-chillax pr-6 text-right`}><Link to="/">All(#todos length)</Link></li>
                    </ul>
                </nav>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>TODO list</h1>
        </div>
    )
}