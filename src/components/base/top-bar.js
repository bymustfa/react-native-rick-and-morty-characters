import React from "react";
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ArrowLeft } from "../icons";

const TopBar = ({ onBack = null, title = "", subtitle = "" }) => {
  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title={title}
        subtitle={subtitle}
        accessoryLeft={() =>
          onBack && (
            <TopNavigationAction
              icon={<ArrowLeft stroke="#fff" />}
              onPress={onBack}
            />
          )
        }
      />
    </Layout>
  );
};

export default TopBar;
