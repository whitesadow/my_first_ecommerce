"use client"

import React, { useState } from 'react'
import { AiOutlineAppstore, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMenuOutline } from 'react-icons/io5';
import UserAccountForm from './UserAccountForm';

const MobNavbar = () => {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para mostrar el formulario de usuario
  const [showUserForm, setShowUserForm] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white max-w-full mob_navbar px-6 z-[100]">
      <div className="flex justify-between items-center text-2xl py-3">
        {/* Botón de menú */}
        <button onClick={toggleMenu}>
          <IoMenuOutline />
        </button>

        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        <AiOutlineHome />
        <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        {/* Icono de usuario */}
        <button onClick={() => setShowUserForm(true)}>
          <AiOutlineUser />
        </button>
        <AiOutlineAppstore />
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute bottom-14 left-0 right-0 bg-gray-100 shadow-md p-4 rounded-lg text-lg z-50">
          <ul className="space-y-3">
            <li><a href="#mens" className="block text-gray-700">Mens</a></li>
            <li><a href="#womens" className="block text-gray-700">Womens</a></li>
            <li><a href="#jewelry" className="block text-gray-700">Jewelry</a></li>
            <li><a href="#accessories" className="block text-gray-700">Accessories</a></li>
            <li><a href="#perfume" className="block text-gray-700">Perfume</a></li>
            <li><a href="#blog" className="block text-gray-700">Blog</a></li>
            <li><a href="#hot-offers" className="block text-gray-700">Hot Offers</a></li>
          </ul>
        </div>
      )}

      {/* Formulario de usuario */}
      {showUserForm && (
        <UserAccountForm onClose={() => setShowUserForm(false)} />
      )}
    </div>
  );
}

export default MobNavbar;
