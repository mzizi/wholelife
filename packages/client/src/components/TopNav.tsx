import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { FiLogOut, FiMenu, FiSearch, FiUser } from "react-icons/fi";

export interface TopNavProps {
  showMenu: boolean;
  toggleShowMenu: Dispatch<SetStateAction<boolean>>;
}

export const TopNav: FC<TopNavProps> = ({ showMenu, toggleShowMenu }) => {
  return (
    <div className="sticky inset-0 w-full h-[7vh]">
      <div className="navbar bg-brand-100 text-black">
        <div className="navbar-start flex gap-8 items-center">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => toggleShowMenu((prev) => !prev)}
          >
            <FiMenu fontSize="1.25rem" />
          </button>
          {!showMenu && (
            <a href="/" className="text-2xl font-sans uppercase">
              Wholelife
            </a>
          )}
        </div>
        <div className="navbar-center hidden lg:block">
          <div className="w-[35vw] p-1.5 flex bg-[whitesmoke] rounded-md border border-black">
            <div className="p-1.5 text-current ">
              <FiSearch fontSize="1.25rem" className="text-current" />
            </div>
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full bg-transparent border-0 p-1 placeholder:text-gray-700 text-current px-4 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="navbar-end justify-self-end">
          <NavDropdown
            icon={
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full"
                  src="https://i.pravatar.cc/60?img=3"
                />
              </div>
            }
            tabIndex={0}
            links={[
              { label: "Profile", href: "/user/profile", icon: <FiUser /> },
              { label: "LogOut", href: "/logout", icon: <FiLogOut /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export interface NavDropdownProps {
  icon: ReactNode;
  tabIndex: number;
  className?: string;
  links: { label: string; href: string; icon?: ReactNode }[];
}

export const NavDropdown: FC<NavDropdownProps> = ({
  icon,
  tabIndex,
  links,
  className,
}) => {
  return (
    <div className="!z-50 dropdown dropdown-end">
      <label
        tabIndex={tabIndex}
        className={`btn btn-ghost btn-circle ${className}`}
      >
        {icon}
      </label>
      <ul
        tabIndex={tabIndex}
        className="menu menu-compact rounded-md dropdown-content p-2 shadow shadow-current bg-white w-48 font-semibold"
      >
        {links.map((link) => (
          <li key={link.href} className="hover:bg-brand-200 rounded-md">
            <a href={link.href}>
              <div className="w-full flex items-center gap-4">
                {link.icon && (
                  <span className="p-1.5 rounded-full bg-gray-200">
                    {link.icon}
                  </span>
                )}
                <span>{link.label}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
