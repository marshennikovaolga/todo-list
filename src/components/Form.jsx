import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import List from "./List";
import Completed from "./Completed";
import Active from "./Active";
import {useState} from "react";

export default function Form() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    return (
        <>
            <Header />
            <Routes>
            <Route path='/' element={<List todos={todos} setTodos={setTodos} setCompletedTodos={setCompletedTodos} />} />
            {/* <Route path="/completed" element={<Completed todos={todos.filter(todo => todo.completed)} />} /> */}
            <Route path="/completed" element={<Completed todos={completedTodos} />} />
                <Route path="/active" element={<Active todos={todos.filter(todo => !todo.completed)} />} />
            </Routes>
        </>
    )
}