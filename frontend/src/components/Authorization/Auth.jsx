import React from "react";
import { loginUser } from '../../utils/api';
import FormAuth from "./FormAuth";

export default function Auth({ setLoggedIn }) {

    const handleLogin = async (userData) => {
        try {
            await loginUser(userData);
            setLoggedIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    return <FormAuth onSubmit={handleLogin} title='Authorize, please' buttonTitle='sign in' />;
}