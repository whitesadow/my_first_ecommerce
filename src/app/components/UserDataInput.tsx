"use client";

import React from 'react';

const UserDataInput: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">User Data Input</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                        <input type="text" id="firstName" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                        <input type="text" id="lastName" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idNumber" className="block text-gray-700">ID Number</label>
                        <input type="text" id="idNumber" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="birthDate" className="block text-gray-700">Birth Date</label>
                        <input type="date" id="birthDate" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserDataInput;
