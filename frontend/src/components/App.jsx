import React from "react";
import Form from "./Form";

export default function App() {
    return (
        <>
            <Form />
        </>
    )
}
// import React from "react";
// import Form from "./Form";
// import Auth from "./Auth";
// import Register from "./Register";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState } from 'react'

// export default function App() {

//     const [ loggedIn, setLoggedIn ] = useState(false);

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