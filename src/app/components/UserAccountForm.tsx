"use client";

import React, { useState } from 'react';
import UserValidation from './UserValidation';
import ErrorNotification from './ErrorNotification';

const UserAccountForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const username = (e.target as any).username.value;
        const password = (e.target as any).password.value;

        if (!username || !password) {
            setError('Please fill in all fields.');
        } else {
            // Aquí puedes añadir la lógica de autenticación.
            console.log('Logging in:', { username, password });
            onClose(); // Close the form after login
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const firstName = (e.target as any).firstName.value;
        const lastName = (e.target as any).lastName.value;
        const idNumber = (e.target as any).idNumber.value;
        const birthDate = (e.target as any).birthDate.value;

        if (!firstName || !lastName || !idNumber || !birthDate) {
            setError('Please fill in all fields.');
        } else {
            // Aquí puedes añadir la lógica de registro.
            console.log('Registering:', { firstName, lastName, idNumber, birthDate });
            onClose(); // Close the form after registration
        }
    };

    const handleForgotPassword = () => {
        alert('Forgot Password');
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose} // Permite cerrar al hacer clic en el fondo
            style={{ zIndex: 9999 }} // Asegura que esté sobre todo
        >
            <div
                className="bg-white p-8 rounded-lg shadow-lg relative"
                onClick={e => e.stopPropagation()} // Evita que el clic dentro del modal cierre el formulario
            >
                {/* Botón de cierre */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    onClick={onClose}
                    aria-label="Close"
                    type="button"
                >
                    &times;
                </button>

                {isLoginVisible && (
                    <UserValidation 
                        onSubmit={handleLogin} 
                        onCreateAccount={() => {
                            setIsLoginVisible(false);
                            setIsRegisterVisible(true);
                        }} 
                        onForgotPassword={() => alert('Forgot Password')} 
                    />
                )}

                {isRegisterVisible && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">User Registration</h2>
                        <form onSubmit={handleRegister}>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                                <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                                <input type="text" id="lastName" name="lastName" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="idNumber" className="block text-gray-700">ID Number</label>
                                <input type="text" id="idNumber" name="idNumber" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="birthDate" className="block text-gray-700">Birth Date</label>
                                <input type="date" id="birthDate" name="birthDate" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Register
                            </button>
                        </form>
                        <div className="mt-4">
                            <button onClick={() => {
                                setIsRegisterVisible(false);
                                setIsLoginVisible(true);
                            }} className="text-blue-500 underline">Back to Login</button>
                        </div>
                    </>
                )}

                {error && <ErrorNotification message={error} onClose={() => setError(null)} />}
            </div>
        </div>
    );
};

export default UserAccountForm;
