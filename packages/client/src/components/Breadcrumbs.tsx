import { FC, Fragment, useMemo } from "react";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  if (allCrumbs.length < 1) {
    return null;
  }

  return (
    <div className="w-full h-max shadow shadow-current">
      <div className="w-full flex gap-2 items-center p-4">
        {allCrumbs.map((crumb, idx) => (
          <Fragment key={`breadcrumb-${Math.random() * idx}`}>
            <Link
              to={crumb.href}
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
          </Fragment>
        ))}
        {allCrumbs.length > 1 && (
          <button
            onClick={() => navigate(-1)}
            className="ml-auto h-full btn-sm btn-group btn-primary rounded-md items-center text-white"
          >
            <div className="w-max flex item-center capitalize gap-2">
              <FiArrowLeft fontSize="1.25rem" />
              <span className="text-sm">Back</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
