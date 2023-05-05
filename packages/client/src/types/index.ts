import { ReactNode } from "react";

export interface ILink {
  label: string;
  href: string;
  icon: ReactNode;
  component: ReactNode;
}

export interface IRoute extends ILink {
  subRoutes?: ILink[];
}
