import { ReactNode } from "react";
import {
  TbApps,
  TbBrandAirtable,
  TbCalendarEvent,
  TbDashboard,
  TbHierarchy,
  TbSettings,
} from "react-icons/tb";

export interface RouteType {
  name: string;
  path: string;
  icon: ReactNode;
}

export interface IRoute extends RouteType {
  subRoutes?: RouteType[];
}

export const routes: IRoute[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <TbDashboard size={30} />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <TbCalendarEvent size={30} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <TbBrandAirtable size={30} />,
  },
  {
    name: "Team Members",
    path: "/team",
    icon: <TbHierarchy size={30} />,
  },
  {
    name: "Application",
    path: "/application",
    icon: <TbApps size={30} />,
    subRoutes: [
      {
        name: "Settings",
        path: "/Settings",
        icon: <TbSettings size={30} />,
      },
    ],
  },
];
