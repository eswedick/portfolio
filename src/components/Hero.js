import React from "react";
// import HeroImg from "../assets/hero-img.png";

import {
    AiOutlineGitlab,
    AiOutlineGithub,
    AiOutlineLinkedin
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32 h-screen">
            <div className="container mx-auto flex md:grid-cols-1 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl mx-auto">
                        Hi, <br />I am Evan Swedick<br />
                    </h1>

                    <p className="py-5 mx-auto">
                        A full stack developer
                    </p>

                    {/*links*/}
                    <div className="flex py-5 ">
                        <a
                            href="https://git.swedick.io/evan"
                            target="_blank"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGitlab size={40} />{" "}
                        </a>
                        <a
                            href="https://www.github.com/eswedick"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={40} />{" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/evan-swedick-48699111a/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} />{" "}
                        </a>
                    </div>

                    <a
                        href="/#projects"
                        className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                {/*<div className="hero-img">*/}
                {/*    <img*/}
                {/*        // src={HeroImg}*/}
                {/*        alt="coding illustration"*/}
                {/*        className="lgw-[80%] ml-auto"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Hero;