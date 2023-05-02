import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import backdropImg from "../assets/backdrop.jpg";
import { Image, ThemeToggler } from "../components";

export const Landing = () => {
  return (
    <main className="w-screen min-h-screen h-full flex flex-col gap-8 relative overflow-x-hidden font-serif">
      <header className="flex flex-col h-full min-h-[100vh] gap-10 bg-brand-100 text-brand-900 dark:bg-brand-900 dark:text-white">
        <div className="fixed z-10 inset-0 p-8 sm:px-15 lg:px-20 flex items-center h-[8vh] w-full shadow-md bg-brand-100 dark:bg-brand-900">
          <div className="flex-1">
            <Link
              to="/"
              className="text-3xl font-bold text-primary dark:text-white rounded-md"
            >
              Wholelife &trade;
            </Link>
          </div>
          <div className="justify-self-end">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <Link
                to="/signup"
                className="btn btn-outline btn-accent capitalize text-lg text-white rounded-md"
              >
                SignUp
              </Link>
              <Link
                to="/signin"
                className="btn btn-primary capitalize text-lg text-white rounded-md"
              >
                SignIn
              </Link>

              <ThemeToggler />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col-reverse justify-center items-center w-full gap-40 p-8 sm:px-15 lg:px-20 lg:flex-row">
          <div className="w-full lg:w-[50%] h-max flex flex-col gap-12 flex-wrap">
            <h1 className="text-5xl md:text-6xl font-semibold capitalize">
              Streamlined Project & Personnel Management
            </h1>
            <div className="flex flex-col gap-6 text-lg text-neutral-800 dark:text-neutral-400">
              <p>
                Wholelife is an all-in-one tool for effective and collaborative
                project & personnel management.
              </p>
              <p>
                It comes with all the features you require to stay in ultimate
                control of your teams, tasks, projects and communications.
              </p>
            </div>
            <Link
              to="/signin"
              className="btn-group w-max btn-accent rounded-md"
            >
              <div className="p-4 flex gap-4 items-center font-semibold font-serif text-lg">
                <span>Get started</span>
                <FiArrowRightCircle fontSize="1.5rem" />
              </div>
            </Link>
          </div>

          <div className="w-full flex lg:w-[50vw] items-center justify-center gap-8">
            <div className="relative transition duration-300">
              <Image
                width="full"
                height="full"
                src={backdropImg}
                alt="product planning"
                className="rounded-lg w-full h-auto aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </header>
      {/* <section className="w-full p-8 sm:px-15 lg:px-20">
        <h2 className="text-2xl">Features</h2>
      </section>*/}
      {/* <div className="h-[200vh]"></div> */}
    </main>
  );
};
