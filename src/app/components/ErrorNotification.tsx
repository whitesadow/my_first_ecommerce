"use client";

import React from "react";

const ErrorNotification: React.FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Error</h2>
                <p className="text-gray-700 mb-4">{message}</p>
                <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ErrorNotification;