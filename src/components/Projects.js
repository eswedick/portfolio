import React from "react";
import Image from 'next/image'
import project from "../../public/static/code.jpg";
import reactAuth from "/src/assets/react-auth-login.png";
import portScreenshot from "/src/assets/port-screenshot.png";

const Projects = () => {
    const projects = [
        {
            img: reactAuth,
            title: "React Auth",
            desc: "A React Typescript MaterialUI client, Express NodeJS MySQL server with user creation and JWT auth",
            live: "",
            code: "https://git.swedick.io/evan/react-auth-base",
        },
        {
            img: project,
            title: "Woodstock",
            desc: "A document sharing app built with ASP.NET Blazor Server, Dapper, and SQL Server",
            live: "",
            code: "https://git.swedick.io/evan/woodstock",
        },
        {
            img: portScreenshot,
            title: "Portfolio",
            desc: "A simple portfolio site built with Next, React, And Tailwind",
            live: "",
            code: "https://github.com/eswedick/portfolio",
        }
    ];

    return (
        <section className="bg-primary text-white px-5 py-32 h-screen" id="projects">
            <div className="container mx-auto grid md:grid-cols-1 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 mx-auto">
                        Projects
                    </h2>

                    <p className="pb-5 text-2xl">
                        These are some of my recent projects
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <Image src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        style={{
                                            display: project.live === "" ? "none": "block"
                                        }}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        style={{
                                            display: project.code === "" ? "none": "block"
                                        }}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
