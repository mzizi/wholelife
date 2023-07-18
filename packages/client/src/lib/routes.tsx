import {
  FiCalendar,
  FiClipboard,
  FiClock,
  FiFile,
  FiFileText,
  FiHome,
  FiMessageCircle,
  FiPieChart,
  FiUsers,
} from "react-icons/fi";

import { Home } from "../pages";
import { Dashboard, Report } from "../pages/Dashboard";
import { Chart } from "../pages/Dashboard/Chart";
import { IRoute } from "../types";

const routes: IRoute[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <FiHome />,
    component: <Dashboard />,
    subRoutes: [
      {
        label: "Charts",
        href: "/dashboard/Charts",
        icon: <FiPieChart />,
        component: <Chart />,
      },
      {
        label: "Reports",
        href: "/dashboard/reports",
        icon: <FiFileText />,
        component: <Report />,
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FiClipboard />,
    component: <Home />,
  },
  {
    label: "Messenger",
    href: "/messenger",
    icon: <FiMessageCircle />,
    component: <Home />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <FiUsers />,
    component: <Home />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <FiCalendar />,
    component: <Home />,
  },
  {
    label: "Files",
    href: "/files",
    icon: <FiFile />,
    component: <Home />,
  },
  {
    label: "Time Tracker",
    href: "/time-tracker",
    icon: <FiClock />,
    component: <Home />,
  },
];

export default routes;
