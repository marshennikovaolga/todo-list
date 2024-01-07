import React from "react";
import FormAuth from "./FormAuth";
import { loginUser } from '../../utils/api';
import { Link } from 'react-router-dom';

export default function Auth({ setLoggedIn }) {

    const handleLogin = async (userData) => {
        try {
            await loginUser(userData);
            setLoggedIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    const anotherButton = {
        title: 'create an account',
        href: '/register'
    };

    return <FormAuth onSubmit={handleLogin} title='Authorize, please' buttonTitle='sign in' anotherButton={anotherButton}/>;
}