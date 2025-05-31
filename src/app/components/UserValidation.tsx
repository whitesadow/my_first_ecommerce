"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ForgotPasswordForm from './ForgotPasswordForm';

const UserValidation: React.FC<{ onSubmit: (e: React.FormEvent) => void, onCreateAccount: () => void, onForgotPassword: () => void }> = ({ onSubmit, onCreateAccount, onForgotPassword }) => {
    const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
    const router = useRouter();

    const handleClose = () => {
        setIsForgotPasswordVisible(false);
        router.push('/'); // Redirige al inicio del proyecto
    };

    return (
        <div className="relative">
            <button 
                className="absolute top-0 right-0 m-4 text-gray-500 text-xl"
                onClick={handleClose}
            >
                X
            </button>
            {isForgotPasswordVisible ? (
                <ForgotPasswordForm onClose={() => setIsForgotPasswordVisible(false)} />
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4">User Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input type="text" id="username" name="username" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Login
                        </button>
                    </form>
                    <div className="mt-4">
                        <button onClick={onCreateAccount} className="text-blue-500 underline">Create Account</button>
                        <button onClick={() => setIsForgotPasswordVisible(true)} className="ml-4 text-blue-500 underline">Forgot Password</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserValidation;
