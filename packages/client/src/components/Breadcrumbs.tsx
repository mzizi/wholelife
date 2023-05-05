import { FC, useMemo } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { ILink } from "../types";
import { routes } from "../utils";

type IBreadcrumbs = Pick<ILink, "href" | "icon" | "label"> & {
  active?: boolean;
};

interface Props {
  crumbs?: IBreadcrumbs[];
}

export const Breadcrumbs: FC<Props> = ({ crumbs }) => {
  const location = useLocation();

  const allCrumbs: IBreadcrumbs[] = useMemo(() => {
    let items: IBreadcrumbs[] = [];
    if (location) {
      const pathname = location.pathname;
      const paths = pathname.split("/");
      const parentRoute = paths[1];
      routes
        .filter((route) => route.href === `/${parentRoute}`)
        .map((route) => {
          items.push({
            icon: route.icon,
            href: route.href,
            label: route.label,
            active: route.href === pathname,
          });

          route.subRoutes?.map((subRoute) => {
            if (subRoute.href === pathname) {
              items.push({
                icon: subRoute.icon,
                href: subRoute.href,
                label: subRoute.label,
                active: subRoute.href === pathname,
              });
            }
          });
        })[0];
    }
    return items || crumbs;
  }, [location]);

  return (
    <div className="w-full h-full text-brand-800 bg-neutral-200 shadow-md rounded-md">
      <div className="w-full h-full flex gap-2 items-center p-4">
        {allCrumbs.map((crumb, idx) => (
          <>
            <Link
              to={crumb.href}
              key={`breadcrumb-${Math.random() * idx}`}
              className="w-max h-full link hover:link-primary text-brand-800"
            >
              <div className="flex item-center capitalize gap-2">
                <span className="text-md">{crumb.icon}</span>
                <span className="text-sm">{crumb.label}</span>
              </div>
            </Link>
            {allCrumbs.length - 1 !== allCrumbs.indexOf(crumb) ? (
              <FiChevronRight className="text-md" />
            ) : null}
          </>
        ))}
        {allCrumbs.length > 1 && (
          <Link
            to={`/${location.pathname.split("/")[1]}`}
            className="w-max ml-auto h-full link hover:link-primary text-brand-800"
          >
            <div className="flex item-center capitalize gap-2">
              {/* <span className="text-md">{crumb.icon}</span> */}
              <span className="text-sm">Back</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
