import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import SettingsView from "../views/SettingsView";

import { Home, Search, Sliders } from "../components/icons";
import type { FC } from "react";

interface ITabBarType {
  id: number;
  path: string;
  component: FC;
  title: string;
  icon: FC;
  isActive: boolean;
}

const tabBarRoutes: ITabBarType[] = [
  {
    id: 1,
    path: "home",
    component: HomeView,
    title: "Home",
    icon: Home,
    isActive: false,
  },
  {
    id: 10,
    path: "search",
    component: SearchView,
    title: "Search",
    icon: Search,
    isActive: false,
  },
  {
    id: 20,
    path: "settings",
    component: SettingsView,
    title: "Settings",
    icon: Sliders,
    isActive: false,
  },
];

export { tabBarRoutes };
