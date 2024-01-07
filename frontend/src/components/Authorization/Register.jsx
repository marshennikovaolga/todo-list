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

    return <FormAuth onSubmit={handleRegister} title="Register" buttonTitle='sign up' />;
}