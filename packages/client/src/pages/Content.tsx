import { FC } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import { Tab } from "@headlessui/react";

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
        <section className="w-full h-full flex flex-col gap-4">
          <div className="w-full h-max bg-neutral-200 p-4">
            <h1 className="text-xl text-current">{title}</h1>
          </div>
          <div className="w-full flex-1 p-4 bg-[white]">
            <Outlet />
          </div>
        </section>
      ) : (
        <section className="relative flex flex-col gap-4">
          <div className="w-full h-max bg-neutral-200 p-4">
            <h1 className="text-2xl text-current">{title}</h1>
          </div>
          <div className="flex-1 p-4 w-full flex bg-white">
            <Outlet />
          </div>
        </section>
      )}
    </Layout>
  );
};
