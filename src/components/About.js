import React from "react";
import catTax from "/public/static/cats.JPG";
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-secondary text-white px-5 py-32 h-screen" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-sky-400 pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        My name is Evan Swedick. I am a Full Stack Software Engineer.
                    </p>

                    <p className="pb-5">
                        I build beautiful applications with a number of technologies.
                    </p>

                    <p className="pb-5">
                        I am proficient in Frontend technologies like ASP.NET, Blazor, React, NextJs, MaterialUI,
                        TailwindCSS
                    </p>

                    <p className="pb-5">I&apos;ve written backends in Node+Express, C#, Python</p>

                    <p className="pb-5">I have experience with a number of relational databases,
                        as well as ORMs like SqlAlchemy, Sequelize, Dapper, and Entity Framework.</p>

                    <p className="pb-5">
                        In my spare time I enjoy camping, hanging with my cats, and playing music with my friends.
                    </p>
                </div>

                <div className="ml-auto h-120 w-96 overflow-hidden" style={{filter: 'grayscale(30%)'}}>
                    <Image
                        src={catTax}
                        alt="cat tax"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

