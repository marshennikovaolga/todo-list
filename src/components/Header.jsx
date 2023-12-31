import React from "react";
import { tw } from "twind";

export default function Header() {
    return (
        <div>
            <div className={tw `text-right leading-8 pt-4`}>
                <p className={tw `pr-6`}>complited</p>
                <p className={tw `pr-6`}>active</p>
            </div>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>TODO list</h1>
        </div>
    )
}