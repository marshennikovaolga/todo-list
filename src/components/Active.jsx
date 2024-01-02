
import React from "react";
import { tw } from "twind";

export default function Active({ todos }) {
    return (
        <>
            <div className={tw`max-w-md mx-auto text-center`}>
                <h2 className={tw`text-2xl font-bold mb-4`}>Active</h2>
                <p className={tw`text-xs mb-4 text-center`}>these todos are in progress</p>
                <ul className={tw`list-disc`}>
                    {todos.map((todo, index) => (
                        <li key={index} className={tw`list-none mb-2 border border-gray-300 rounded p-4 shadow-md flex items-center justify-between`}>
                            <div>
                                {todo.time} {todo.title && `${todo.title}`}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
