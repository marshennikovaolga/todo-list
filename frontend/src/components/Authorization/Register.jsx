import React from "react";
import FormAuth from "./FormAuth";
import { registerUser } from '../../utils/api';

export default function Register() {

    const handleRegister = async (userData) => {
        try {
            await registerUser(userData);
        } catch (error) {
            console.error(error);
        }
    };

    const anotherButton = {
        title: 'sign in',
        href: '/login'
    };

    return <FormAuth onSubmit={handleRegister} title="Register" buttonTitle='sign up' anotherButton={anotherButton} />;
}