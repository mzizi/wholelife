import { FC, useMemo } from "react";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

import { IRoute } from "../types";
import { routes } from "../utils";

interface SideNavProps {
  version?: string;
}

export const SideNav: FC<SideNavProps> = ({ version }) => {
  const commonRoutes = useMemo(
    () => [
      {
        label: "Settings",
        href: "/settings",
        icon: <FiSettings />,
      },
    ],
    []
  );

  return (
    <aside className="fixed left-0 w-48 h-full bg-black/90 text-[whitesmoke] transition-all">
      <div className="w-full h-full flex flex-col gap-5 p-4">
        <div className="w-full h-[10vh] flex flex-col gap-2 p-4">
          <h1 className="text-2xl font-sans uppercase">Wholelife</h1>
          {version && (
            <small className="w-full place-content-end flex items-center gap-2 uppercase">
              <span className="text-neutral-500">Version</span>
              <span className=" text-neutral-400">{version}</span>
            </small>
          )}
        </div>
        <div className="w-full h-full flex-1">
          <SideNavContent routes={routes} />
        </div>
        <div className="w-full justify-self-end py-4">
          <div className="flex flex-col gap-4">
            {commonRoutes.map((route) => (
              <Link
                to={route.href}
                key={route.href}
                className="w-full flex items-center px-4 py-2 gap-4 hover:bg-black"
              >
                <span className="text-current fill-current">{route.icon}</span>
                <span className="flex-1">{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface SideNavContentProps {
  routes: IRoute[];
}

export const SideNavContent: FC<SideNavContentProps> = ({ routes }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {routes.map((route) => (
        <a
          key={route.href}
          href={route.href}
          className="w-full flex items-center px-4 py-2 gap-4 hover:bg-brand-200 hover:text-brand-800 rounded-md font-medium"
        >
          <span className="text-current fill-current">{route.icon}</span>
          <span className="flex-1">{route.label}</span>
        </a>
      ))}
    </div>
  );
};
