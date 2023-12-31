import React from "react";
import { tw } from "twind";

export default function Header() {
    return (
        <div>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>TODO list</h1>
        </div>
    )
}