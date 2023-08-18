import React from "react";
import { logo } from "../assets/index";

const Hero = () => {
  return (
    <header className="flex justify-between w-full items-center flex-col">
      <nav className="flex justify-between w-full p-3 mb-10 items-center">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          className="black_btn "
          type="button"
          onClick={() =>
            window.open("https://github.com/MuhammadAzeem-1", "_blank")
          }
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
