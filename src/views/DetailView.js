import React, { useEffect, useState, useCallback } from "react";
import {
  Layout,
  Text,
  List,
  ListItem,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Image } from "react-native";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import TopBar from "../components/base/top-bar";
import Services from "../services/characters";
import { HeartEmty, HeartFull } from "../components/icons";

const DetailView = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const route = useRoute();

  const character = route.params.character;

  const [isFavorite, setIsFavorite] = useState(character.isFavorite);

  const data = [
    { title: "Name", value: character.name },
    { title: "Status", value: character.status },
    { title: "Species", value: character.species },
    { title: "Type", value: character.type },
    { title: "Gender", value: character.gender },
  ];

  const handleFavorite = async () => {
    const favoriteCharacters = await Services.AddFavoriteCharacter(
      character.id
    );
    setIsFavorite(favoriteCharacters.includes(character.id));
  };

  const handleUnfavorite = async () => {
    const favoriteCharacters = await Services.RemoveFavoriteCharacter(
      character.id
    );
    setIsFavorite(favoriteCharacters.includes(character.id));
  };

  const characterIsFavorite = useCallback(async () => {
    const favoriteCharacters = await Services.GetFavoriteCharacters();
    setIsFavorite(favoriteCharacters.includes(character.id));
  }, [character.id]);

  useEffect(() => {
    if (isFocused) {
      characterIsFavorite();
    }
  }, [isFocused]);

  return (
    <Layout style={{ height: "100%" }}>
      <TopBar
        title={character.name}
        subtitle={character.status}
        accessoryRight={() => (
          <TopNavigationAction
            icon={
              isFavorite ? (
                <HeartFull fill="#DA3030" stroke="#DA3030" />
              ) : (
                <HeartEmty color="#adacac" />
              )
            }
            onPress={isFavorite ? handleUnfavorite : handleFavorite}
          />
        )}
        onBack={() => navigation.goBack()}
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
