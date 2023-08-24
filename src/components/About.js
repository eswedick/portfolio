import React from "react";
// import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-secondary text-white px-5 py-32 h-screen" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-sky-400 pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        Hi, My name is Evan Swedick. I am a
                        Full Stack Developer. I build beautiful websites and applications with a number of technologies.
                    </p>

                    <p className="pb-5">
                        I am proficient in Frontend technologies like ASP.Net, Blazor, React, NextJs, MaterialUI,
                        TailwindCSS
                    </p>

                    <p className="pb-5">I&apos;ve written backends in Node+Express, C#, Python</p>

                    <p className="pb-5">I have experience with a number of relational databases,
                        as well as ORMs like SqlAlchemy, Sequelize, Dapper, and Entity Framework.</p>

                    <p className="pb-5">
                        In my spare time I enjoy camping and playing music with my friends.
                    </p>
                </div>

                <div className="about-img">
                    <img
                        // src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

