import React, { FC } from "react";
import { Box, Button } from "../../base";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { tabBarRoutes } from "../../../config/routes";
import { colors } from "../../../config/theme";

const TabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const activeRoute = state.routes[state.index];
  const routes = tabBarRoutes.map((route) => ({
    ...route,
    isActive: route.path === activeRoute.name,
  }));

  return (
    <Box pb={10}>
      <Box
        width="90%"
        margin="auto"
        bg={colors.black}
        mt={10}
        flexDirection="row"
        justifyContent="space-around"
        borderRadius={10}
      >
        {routes.map((route) => (
          <Button
            key={route.id}
            height={70}
            width={70}
            position="relative"
            onPress={() => {
              navigation.navigate(route.path);
            }}
          >
            {/*@ts-ignore*/}
            <route.icon color={route.isActive ? "white" : "gray"} />
            {route.isActive && (
              <Box
                size={5}
                bg="white"
                position="absolute"
                bottom="8px"
                borderRadius={10}
              />
            )}
          </Button>
        ))}

        {/*<Button>*/}
        {/*  <Search color="#ccc" />*/}
        {/*</Button>*/}

        {/*<Button>*/}
        {/*  <Sliders color="#ccc" />*/}
        {/*</Button>*/}
      </Box>
    </Box>
  );
};

export default TabBar;
