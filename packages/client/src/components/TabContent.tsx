import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Tab } from "@headlessui/react";

type TabType = {
  href: string;
  label: string;
  content: ReactNode;
};

interface Props {
  tabs: TabType[];
}

export const TabContent: FC<Props> = (props) => {
  return (
    <Tab.Group>
      <Tab.List>
        {props.tabs.length > 0 &&
          props.tabs.map((tab) => (
            <Tab key={tab.href}>
              <Link to={tab.href}>{tab.label}</Link>
            </Tab>
          ))}
      </Tab.List>
      <Tab.Panels className="p-8">
        {props.tabs.length > 0 &&
          props.tabs.map((tab) => (
            <Tab.Panel key={tab.href}>
              <div className="w-full p-4 h-full">{tab.content}</div>
            </Tab.Panel>
          ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
