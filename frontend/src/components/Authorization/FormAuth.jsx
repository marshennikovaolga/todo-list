import React from 'react';
import { tw } from "twind";
import { useState } from 'react';

export default function FormAuth({ title, buttonTitle, onSubmit }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    return (
        <div className={tw`text-center leading-8 pt-4 mx-auto`}>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>{title}</h1>
            <form className={tw`mt-4`} onSubmit={handleSubmit}>
                <div className={tw`mb-4`}>
                    <label htmlFor="email" className={tw`block text-gray-700 text-sm font-bold mb-2`}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className={tw`w-[22em] shadow appearance-none border rounded py-2 px-3 text-sm text-gray-800
                        leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="enter your email"
                    />
                </div>
                <div className={tw`mb-6`}>
                    <label htmlFor="password" className={tw`block text-gray-700 text-sm font-bold mb-2`}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        className={tw`w-[22em] shadow appearance-none border rounded py-2 px-3 text-sm text-gray-800
                        leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className={tw`bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                    {buttonTitle}
                </button>
            </form>
        </div>
    )
}