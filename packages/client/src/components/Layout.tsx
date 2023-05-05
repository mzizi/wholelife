import { FC, ReactNode, useState } from "react";

import { Breadcrumbs } from "./Breadcrumbs";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";

export interface LayoutProps {
  children: ReactNode;
  version?: string;
}

export const Layout: FC<LayoutProps> = ({ children, version }) => {
  const [showMenu, toggleShowMenu] = useState(true);

  return (
    <div className="w-screen h-full bg-[whitesmoke] text-brand-900 font-serif">
      <div className="relative w-full h-screen flex gap-4 overflow-x-hidden">
        {showMenu && <SideNav version={version} />}
        <div className={`flex-1 ${showMenu ? "ml-48" : "ml-0"}`}>
          <header className="sticky left-0 top-0 h-max w-full !z-50">
            <TopNav showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
            <Breadcrumbs />
          </header>
          <main className="flex-1 w-full h-full overflow-y-auto bg-[whitesmoke]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
