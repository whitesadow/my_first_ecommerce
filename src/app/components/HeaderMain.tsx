"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import UserAccountForm from "@/app/components/UserAccountForm";

const HeaderMain: React.FC = () => {
    const [isUserAccountVisible, setIsUserAccountVisible] = useState(false);

    const toggleUserAccount = () => {
        setIsUserAccountVisible(!isUserAccountVisible);
    };

    return (
        <div className="border-b border-gray-200 py-6">
            <div className="container sm:flex justify_between items-center">
                <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
                    <Image src="/logo.png" alt="OJAG EXQUISITE CLOTHING" width={90} height={100} />
                </div>
                <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                    <input className="border-gray-200 border p-2 px-4 rounded-lg w-full" type="text" placeholder='Enter any product name...' />
                    <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
                </div>
                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <div className='relative cursor-pointer' onClick={toggleUserAccount}>
                        <BiUser />
                    </div>
                    <div className="relative cursor-pointer">
                        <FiHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
                        text-white grid place-items-center translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>

                    <div className="relative cursor-pointer">
                        <HiOutlineShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                        text-white grid place-items-center translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>
                </div>
            </div>

            {isUserAccountVisible && <UserAccountForm onClose={toggleUserAccount} />}
        </div>
    );
};

export default HeaderMain;
