import { ReactNode } from "react";

export interface ILink {
  label: string;
  href: string;
  component: ReactNode;
}

export interface IRoute extends ILink {
  icon: ReactNode;
  subRoutes?: ILink[];
}
