import React, { useEffect, useState, useCallback } from "react";
import { Card, Layout, Text } from "@ui-kitten/components";
import { Image, TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { HeartEmty, HeartFull } from "../icons";
import Services from "../../services/characters";

const CardItem = ({ item }) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const textLenght = 15;

  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const characterIsFavorite = useCallback(async () => {
    const favoriteCharacters = await Services.GetFavoriteCharacters();
    setIsFavorite(favoriteCharacters.includes(item.id));
  }, [item.id]);

  const handleFavorite = async () => {
    const favoriteCharacters = await Services.AddFavoriteCharacter(item.id);
    setIsFavorite(favoriteCharacters.includes(item.id));
  };

  const handleUnfavorite = async () => {
    const favoriteCharacters = await Services.RemoveFavoriteCharacter(item.id);
    setIsFavorite(favoriteCharacters.includes(item.id));
  };

  useEffect(() => {
    if (isFocused) {
      characterIsFavorite();
    }
  }, [isFocused]);

  return (
    <Layout
      style={{
        width: "50%",
        padding: 5,
        height: 220,
      }}
    >
      <Card
        onPress={() => navigation.navigate("Detail", { character: item })}
        appearance="filled"
        style={{
          height: "100%",
          backgroundColor: "#151A2F",
          borderRadius: 6,
          position: "relative",
        }}
        level="3"
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 8,
            top: 12,
            zIndex: 1,
            width: 30,
            height: 30,
            borderRadius: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.8}
          onPress={isFavorite ? handleUnfavorite : handleFavorite}
        >
          {isFavorite ? (
            <HeartFull fill="#DA3030" stroke="#DA3030" width={18} height={18} />
          ) : (
            <HeartEmty color="#adacac" width={18} height={18} />
          )}
        </TouchableOpacity>

        <Layout
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          level="3"
        >
          <Text style={{ textAlign: "center" }}>
            {item.name.length > textLenght
              ? item.name.substring(0, textLenght) + "..."
              : item.name}
          </Text>
          <Text
            style={{ textAlign: "center" }}
            category="c2"
            status={
              item.status === "Alive"
                ? "success"
                : item.status === "Dead"
                ? "danger"
                : "warning"
            }
          >
            {item.status}
          </Text>
        </Layout>

        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: 150,
          }}
          source={{ uri: item.image }}
        />
      </Card>
    </Layout>
  );
};

export default CardItem;
