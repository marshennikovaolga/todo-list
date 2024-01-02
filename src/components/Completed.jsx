import React from "react";
import { tw } from "twind";

export default function Completed({ todos }) {
    return (
        <>
            <div className={tw`max-w-md mx-auto p-4`}>
                <h2 className={tw`text-2xl font-bold mb-4 text-center`}>Completed</h2>
                <p className={tw`text-xs mb-4 text-center`}>you have marked these todos as completed</p>
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
