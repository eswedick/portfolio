import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-sky-400 pb-2">
          Contact Me
        </h2>
        <p>
          Want to build something great? Send me an email and let&apos;s talk
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> <a href="mailto:evan@swedick.io">evan@swedick.io</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
