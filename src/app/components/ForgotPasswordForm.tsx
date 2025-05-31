"use client";

import React, { useState } from 'react';

const ForgotPasswordForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email.');
            return;
        }
        console.log('Password recovery requested for:', email);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
                <div className="mt-4">
                <button onClick={onClose} className="mt-4 text-blue-500 underline">Close</button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
