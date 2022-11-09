import React, { useEffect, useState } from "react";
import { Layout, Text, Spinner } from "@ui-kitten/components";
import { FlatList } from "react-native";

import Services from "../services/characters";
import TopBar from "../components/base/top-bar";
import CardItem from "../components/base/card-item";
import { useNavigation } from "@react-navigation/native";

const FavoriteView = () => {
  const navigation = useNavigation();

  const [characters, setCharacters] = useState([]);
  const [characterCount, setCharacterCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getCharacters = async () => {
    setIsFetching(true);
    const favoriteCharacters = await Services.GetFavoriteCharacters();

    if (favoriteCharacters.length === 0) {
      setIsFetching(false);
      setCharacters([]);
    } else {
      const ids = favoriteCharacters.join(",");
      const response = await Services.GetMultipleCharacters(ids);
      console.log("response", response);

      setCharacterCount(favoriteCharacters.length);
      setIsFetching(false);
      setCharacters(response);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <TopBar
        title="Favorite Characters"
        subtitle={`List of characters (${characterCount})`}
        onBack={() => navigation.goBack()}
      />

      {characters.length > 0 ? (
        <>
          <FlatList
            numColumns={2}
            data={characters}
            renderItem={({ item, index }) => <CardItem item={item} />}
          />
          {isFetching && (
            <Layout
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Spinner status="success" size="large" />
            </Layout>
          )}
        </>
      ) : (
        !isFetching &&
        characters.length === 0 && (
          <Text
            category="h4"
            style={{ textAlign: "center", marginTop: 30, opacity: 0.5 }}
          >
            No favorite characters
          </Text>
        )
      )}
    </Layout>
  );
};

export default FavoriteView;
