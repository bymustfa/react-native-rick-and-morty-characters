import React, { useState, useEffect } from "react";
import {
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { ArrowLeft, HeartFull, HeartEmty } from "../icons";

const TopBar = ({
  onBack = null,
  title = "",
  subtitle = "",
  accessoryRight = false,
}) => {
  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title={title}
        subtitle={subtitle}
        accessoryRight={accessoryRight}
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
