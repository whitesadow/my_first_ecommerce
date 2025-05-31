import React from "react";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
    return <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <BsFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsInstagram />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsTwitterX />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsLinkedin />
                    </div>
                </div>
                    <div className="text-gray-500 text-[12px]">
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $100.000 COP
                    </div>
                    <div className="flex gap-4">
                        <select className="text-gray-500 text-[12px] w-[70px]" name="currency" id="currency">
                            <option value="COP">COP $</option>
                            <option value="USD">USD $</option>
                            <option value="EUR">EUR €</option>

                        </select>
                        <select className="text-gray-500 text-[12px] w-[80px]"
                        name="language" id="language">
                            <option value="Espanish">Spanish</option>
                            <option value="English">English</option>
                        </select>
                </div> 
            </div>
        </div>
    </div>
};

export default HeaderTop; 