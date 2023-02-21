import React from "react";
import { Link } from "react-router-dom";

import backdropImg from "../assets/backdrop.jpg";
import { Image, ThemeToggler } from "../components";

export const Landing = () => {
  return (
    <main className="w-screen min-h-screen h-full flex flex-col gap-8 relative overflow-x-hidden font-serif">
      <header className="flex flex-col h-[100vh] p-8 sm:px-15 lg:px-20 gap-10 bg-brand-100 text-brand-900 dark:bg-brand-900 dark:text-white">
        <div className="sticky z-10 top-0 left-0 flex items-center h-[8vh] w-full">
          <div className="flex-1">
            <Link
              to="/"
              className="text-3xl font-bold text-primary dark:text-white rounded-md"
            >
              Wholelife &trade;
            </Link>
          </div>
          <div className="justify-self-end">
            <div className="flex items-center gap-10">
              <Link
                to="/login"
                className="btn btn-accent text-white rounded-md"
              >
                Login
              </Link>

              <ThemeToggler />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center w-full gap-40 py-4 lg:flex-row">
          <div className="w-full lg:w-[50%] h-max flex flex-col gap-10 flex-wrap">
            <h1 className="flex items-center gap-4 text-6xl font-semibold">
              Project and Task Management Tool
            </h1>
            <p className="text-lg text-neutral-800 dark:text-neutral-400">
              Wholelife is an all-in-one tool for streamlining and collaborative
              project & task management. It comes with all the features you
              require to stay in ultimate control of your teams, tasks, projects
              and communications.
            </p>
            <button className="btn btn-accent rounded-md w-max">
              Find out More
            </button>
          </div>

          <div className="w-full hidden lg:flex lg:w-[50vw] items-center justify-center gap-8">
            <div className="relative transition duration-300">
              <Image
                width="full"
                height="full"
                src={backdropImg}
                alt="product planning"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </header>
      {/* <section className="w-full p-8 sm:px-15 lg:px-20">
        <h2 className="text-2xl">Features</h2>
      </section>
      <div className="h-[200vh]"></div> */}
    </main>
  );
};
