import { FC } from "react";
import { fakeUser, IRoute } from "../utils";
import { Navbar, Menu, Avatar, Group, Text, NavLink, Box } from "@mantine/core";
import { TbChevronRight } from "react-icons/tb";

export interface SideNavProps {
  user?: {
    username: string;
    email: string;
    imageUrl: string;
  };
  navRoutes?: IRoute[];
  showMenu: boolean;
}

const SideNav: FC<SideNavProps> = ({
  user = fakeUser,
  navRoutes,
  showMenu = false,
}) => {
  return (
    <Navbar
      p="md"
      hidden={!showMenu}
      hiddenBreakpoint="sm"
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow mt="md" className="w-full">
        <Group position="center" className="w-full">
          {navRoutes &&
            navRoutes.map((navLink) => {
              const { name, path, icon, subRoutes } = navLink;
              return subRoutes && subRoutes.length > 0 ? (
                <NavLink
                  key={path}
                  icon={icon}
                  href={path}
                  label={name}
                  component="a"
                  childrenOffset={"md"}
                >
                  {subRoutes.map((subRoute) => (
                    <NavLink
                      component="a"
                      key={subRoute.path}
                      icon={subRoute.icon}
                      href={subRoute.path}
                      label={subRoute.name}
                      childrenOffset={"md"}
                      className="!w-full bg-green-200"
                    />
                  ))}
                </NavLink>
              ) : (
                <NavLink
                  href={path}
                  key={path}
                  icon={icon}
                  label={name}
                  component="a"
                  childrenOffset={"md"}
                />
              );
            })}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        {user && (
          <Group>
            <Avatar src={user.imageUrl} alt={user.username} radius="xl" />
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {user.username}
              </Text>

              <Text color="dimmed" size="xs">
                {user.email}
              </Text>
            </div>

            <TbChevronRight size={16} />
          </Group>
        )}
      </Navbar.Section>
    </Navbar>
  );
};

export default SideNav;
