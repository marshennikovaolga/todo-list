import React from "react";
import { tw } from "twind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Completed({ todos, setTodos, starTodo, deleteTodo }) {

    const completeTodo = (index) => {
        const updatedTodos = [...todos];
        const completedTodo = { ...updatedTodos[index] };
        completedTodo.completed = true;
        updatedTodos[index] = completedTodo;
        setTodos(updatedTodos);
    };

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
                            <div className={tw`flex items-center`}>
                                <button
                                    className={tw`px-2 py-1 ml-2 ${todo.starred ? 'bg-yellow-400' : 'bg-gray-300'} text-white rounded text-sm`}
                                    onClick={() => starTodo(index)}
                                >
                                    <FontAwesomeIcon icon={faStar} />
                                </button>
                                <button
                                    className={tw`px-2 py-1 ml-2 text-white rounded text-sm ${todo.completed ? 'bg-green-400' : 'bg-green-800'}`}
                                    onClick={() => completeTodo(index)}
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button
                                    className={tw`px-2 py-1 ml-2 bg-black text-white rounded text-sm`}
                                    onClick={() => deleteTodo(index)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
