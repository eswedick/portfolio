import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

const Footer = () => {
    return <div className="flex flex-col items-center justify-center px-5 py-16">
        <span className="text-center text-white">Powered by NextJs and TailwindCSS</span>
        <span className="text-center items-center flex text-white">
            <span>Made with&nbsp;</span><AiTwotoneHeart/>&nbsp;by Evan Swedick</span>
    </div>
};

export default Footer;
