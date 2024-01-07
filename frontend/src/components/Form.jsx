import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import List from "./List";
import Completed from "./Completed";
import Active from "./Active";
import { useState } from "react";
import ProtectedRoute from '../utils/ProtectedRoute';
// import { ApolloClient, ApolloProvider, useQuery, useMutation, gql } from '@apollo/client';

export default function Form() {
    const [todos, setTodos] = useState([]);

    const deleteTodo = (indexDelete) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(indexDelete, 1);
        setTodos(updatedTodos);
    };

    const starTodo = (index) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map((todo, i) => {
                if (i === index) {
                    return {
                        ...todo,
                        starred: !todo.starred,
                        movedToTop: !todo.starred ? true : false,
                    };
                }
                return todo;
            });

            if (updatedTodos[index].movedToTop) {
                const movedItem = updatedTodos.splice(index, 1)[0];
                updatedTodos.unshift(movedItem);
            }

            return updatedTodos;
        });
    };

    const completeTodo = (index) => {
        const updatedTodos = [...todos];
        const completedTodo = { ...updatedTodos[index] };
        completedTodo.completed = true;
        updatedTodos[index] = completedTodo;
        setTodos(updatedTodos);
    };

    return (
        <>
            <Header />
            <Routes>
                {/* <Route path='*' element={<List todos={todos} setTodos={setTodos}
                    deleteTodo={deleteTodo} starTodo={starTodo} completeTodo={completeTodo} />} /> */}
                    <ProtectedRoute
                    path="*"
                    element={<List todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} starTodo={starTodo} completeTodo={completeTodo} />}
                />
                <Route path="/completed"
                    element={<Completed todos={todos.filter(todo => todo.completed)}
                        setTodos={setTodos} starTodo={starTodo} deleteTodo={deleteTodo} />} />
                <Route path="/active"
                    element={<Active todos={todos.filter(todo => !todo.completed)}
                        setTodos={setTodos} starTodo={starTodo} deleteTodo={deleteTodo} />} />
            </Routes>
        </>
    )
}