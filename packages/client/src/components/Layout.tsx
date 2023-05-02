import { FC, ReactNode, useState } from "react";

import { Breadcrumbs } from "./Breadcrumbs";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [showMenu, toggleShowMenu] = useState(true);

  return (
    <main className="w-screen h-full bg-[whitesmoke] text-brand-900 font-serif">
      <div className="relative w-full h-screen flex gap-4 overflow-x-hidden">
        {showMenu && <SideNav />}
        <div className={`flex-1 min-h-[200vh] ${showMenu ? "ml-48" : ""}`}>
          <TopNav showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
          <div className="flex flex-col gap-4 p-4 relative">
            <Breadcrumbs />
            <div className="p-4 flex-1 w-full">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
