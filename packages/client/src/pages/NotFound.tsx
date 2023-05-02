import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center bg-brand-100 dark:bg-brand-900 text-brand-900 dark:text-white">
      <h1 className="text-[10rem] font-sans">404</h1>
      <h2 className="text-2xl capitalize font-sans">Page not found!</h2>
      <Link to="/" className="p-5 btn-group btn-accent text-white rounded-md">
        <div className="flex items-center gap-8 font-semibold">
          <FiArrowLeftCircle fontSize="2rem" />
          <span className="capitalize text-xl font-serif">
            Back to homepage
          </span>
        </div>
      </Link>
    </div>
  );
};
