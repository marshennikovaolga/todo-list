import React from "react";

export default function FormAuth() {
    return (
        <div className={tw`text-center leading-8 pt-4 mx-auto`}>
            <h1 className={tw`font-afcad py-12 text-center text-3xl`}>{title}</h1>
            <form className={tw`mt-4`}>
                <div className={tw`mb-4`}>
                    <label htmlFor="email" className={tw`block text-gray-700 text-sm font-bold mb-2`}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
                        className={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                    {buttonTitle}
                </button>
            </form>
        </div>
    )
}