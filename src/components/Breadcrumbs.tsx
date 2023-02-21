import React, { useMemo } from "react";
import { FiHome } from "react-icons/fi";
import { useRoutes } from "react-router-dom";

import { routes } from "../utils";

export interface BreadcrumbsProps {}

export const Breadcrumbs = () => {
  const crumbs = useMemo(() => {
    let allCrumbs = routes.map((route) => route.label);
    console.log(allCrumbs);
    return [];
  }, []);
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div className="p-4 text-md breadcrumbs text-brand-800 bg-neutral-200 shadow-md rounded-md">
      <ul>
        <li className="text-brand-800">
          <a href="/" className="text-current fill-current">
            <div className="flex items-center gap-4">
              <FiHome fontSize="1rem" />
              <span>Home</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/dashboard">
            <div className="flex items-center gap-4">
              <FiHome fontSize="1rem" />
              <span>Dashboard</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
