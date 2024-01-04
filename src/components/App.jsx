// import React from "react";
// import Form from "./Form";
// import Auth from "./Auth";
// import Register from "./Register";
// import { Routes, Route, Navigate } from "react-router-dom";

// export default function App() {
//     return (
//         <>
//             <Routes>
//                 <Route path="/signup" element={<Register />} />
//                 <Route path="/signin" element={<Auth />} />
//                 <Route
//                     path="/loggedin"
//                     element={isLoggedIn ? <Form /> : <Navigate to="/signin" />}
//                 />
//             </Routes>
//         </>
//     )
// }

import React from "react";
import Form from "./Form";
import FormAuth from "./FormAuth";
import { useState, useEffect } from 'react'

export default function App() {

    const [ loggedIn, setLoggedIn ] = useState(false);

    return (
        <>
            <Form />
        </>
    )
}