import { FC, ReactNode, useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  Image,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

import SideNav from "./SideNav";
import { routes } from "../utils";

export interface SplitLayoutProps {
  user?: {
    username: string;
    email: string;
    imageUrl: string;
  };
  children?: ReactNode | undefined;
}

const SplitLayout: FC<SplitLayoutProps> = ({ children, user }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      navbar={<SideNav navRoutes={routes} showMenu={opened} />}
      header={
        <Header height={100} p="xs">
          <div className="flex items-center h-full gap-8">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div style={{ width: 200 }}>
              <Image radius="md" src="/images/logo.svg" />
            </div>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[1]
              : theme.colors.dark[8],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default SplitLayout;
