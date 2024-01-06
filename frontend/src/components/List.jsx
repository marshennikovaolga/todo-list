import React, { useState } from "react";
import { tw } from "twind";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tooltip from "./Tooltip.jsx";
import Completed from "./Completed.jsx";
import Active from "./Active.jsx";
import { useSpring, animated } from 'react-spring';

export default function List({ todos, setTodos, deleteTodo, starTodo, completeTodo }) {
    const [newTodo, setNewTodo] = useState('');
    const [todoTime, setTodoTime] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const inputValid = newTodo.trim().length > 4;

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const todoItem = {
                title: newTodo,
                time: todoTime ? formatTime(todoTime) : null,
                completed: false,
            };
            setTodos([...todos, todoItem]);
            setNewTodo('');
            setTodoTime(null);
        }
    };


    const formatTime = (time) => {
        const options = { hour: 'numeric', minute: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(time);
    };

    function openTooltip(index) {
        setIsOpen(true);
        setDeleteIndex(index);
    }

    return (
        <>
            <div className={tw`max-w-md mx-auto p-4`}>
                <div className={tw`mb-4 flex`}>
                    <div className={tw`flex flex-col w-full`}>
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="create a new todo..."
                            className={tw`w-full p-2 border border-black-400 rounded mb-2`}
                        />
                        <DatePicker
                            selected={todoTime}
                            onChange={(date) => setTodoTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            placeholderText="select time (optional)"
                            className={tw`w-350 p-2 border border-black-400 rounded`}
                        />
                    </div>
                    <button
                        onClick={addTodo}
                        className={tw`p-2 rounded w-10 h-10 text-white ml-2 transition-colors duration-400`}
                        style={{
                            backgroundColor: inputValid
                                ? '#000'
                                : 'gray',
                            color: 'white',
                            border: '2px solid white',
                        }}
                        disabled={!inputValid}
                    > + </button>
                </div>
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
                                    className={tw`px-2 py-1 ml-2 text-white rounded text-sm ${todo.completed ? 'bg-green-500' : 'bg-green-800'}`}
                                    onClick={() => completeTodo(index)}
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button
                                    className={tw`px-2 py-1 ml-2 bg-black text-white rounded text-sm`}
                                    onClick={() => openTooltip(index)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Tooltip
                openedTooltip={isOpen}
                onDelete={() => deleteTodo(deleteIndex)}
                closeTooltip={() => setIsOpen(false)}
            />
            <Routes>
                <Route path='/completed'
                    element={<Completed todos={todos.filter(todo => todo.completed)}
                        starTodo={starTodo} deleteTodo={deleteTodo} />} />
                <Route path='/active'
                    element={<Active todos={todos.filter(todo => !todo.completed)}
                        starTodo={starTodo} deleteTodo={deleteTodo} />} />
            </Routes>
        </>
    );
}