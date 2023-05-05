import { FC } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import { Layout } from "../components";
import { IRoute } from "../types";

interface CommonProps {
  title: string;
  version: string;
}

type ConditionalProps =
  | {
      activeView: "default";
      parentRoute: IRoute;
    }
  | {
      activeView: "page";
    };

type Props = CommonProps & ConditionalProps;

export const Content: FC<Props> = ({ title, version, ...props }) => {
  const location = useLocation();

  return (
    <Layout version={version}>
      {props.activeView === "default" ? (
        <section className="relative w-full h-full flex flex-col gap-4 p-4">
          <header className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-xl text-current text-center md:text-left">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-2 md:w-max">
              {props.parentRoute.subRoutes &&
                props.parentRoute.subRoutes.length > 0 &&
                props.parentRoute.subRoutes.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    className="btn btn-outline btn-sm rounded-md capitalize"
                  >
                    {sub.label}
                  </Link>
                ))}
            </div>
          </header>
          <main className="flex-1">
            {location.pathname === props.parentRoute.href ? (
              props.parentRoute.component
            ) : (
              <div className="w-full">
                <Outlet />
              </div>
            )}
          </main>
        </section>
      ) : (
        <section className="relative flex flex-col gap-8 p-4">
          <div className="w-full">
            <h1 className="text-2xl text-current">{title}</h1>
          </div>
          <div className="w-full flex items-center">
            <Outlet />
          </div>
        </section>
      )}
    </Layout>
  );
};
