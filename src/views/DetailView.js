import React from "react";
import { Layout, Text, List, ListItem } from "@ui-kitten/components";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TopBar from "../components/base/top-bar";

const DetailView = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const character = route.params.character;

  const data = [
    { title: "Name", value: character.name },
    { title: "Status", value: character.status },
    { title: "Species", value: character.species },
    { title: "Type", value: character.type },
    { title: "Gender", value: character.gender },
  ];

  console.log("character", route.params.character);
  return (
    <Layout style={{ height: "100%" }}>
      <TopBar
        title={character.name}
        subtitle={character.status}
        onBack={() => {
          navigation.goBack();
        }}
      />

      <Layout style={{ alignItems: "center" }}>
        <Image
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
            borderRadius: 10,
          }}
          source={{ uri: character.image }}
        />
      </Layout>

      <Layout
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Layout style={{ padding: 15, width: "75%", marginTop: 35 }}>
          <List
            data={data}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                accessoryRight={() => (
                  <Text
                    status={
                      item.title === "Status"
                        ? item.value === "Alive"
                          ? "success"
                          : item.value === "Dead"
                          ? "danger"
                          : "warning"
                        : "basic"
                    }
                  >
                    {item.value}
                  </Text>
                )}
                style={{ borderBottomWidth: 1, borderBottomColor: "#0b0e17" }}
              />
            )}
          />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DetailView;
