import React from "react";
import Form from "./Form";
import Auth from "./Authorization/Auth";
import Register from "./Authorization/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import ProtectedRoute from '../utils/ProtectedRoute';

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Auth setLoggedIn={setLoggedIn} />} />
                <Route
                    path="/loggedin"
                    element={
                        loggedIn ? (
                            <ProtectedRoute loggedIn={loggedIn} element={<Form />} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </>
    )
}

// import React from "react";
// import Form from "./Form";

// export default function App() {
//     return (
//         <>
//             <Form />
//         </>
//     )
// }