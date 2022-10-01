import React, { useEffect, useState, useRef } from "react";
import { Layout, Text, Spinner, Card } from "@ui-kitten/components";
import { FlatList, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Services from "../services/characters";
import TopBar from "../components/base/top-bar";
import HomeFilter from "../components/base/home-filter";

const HomeView = () => {
  const navigation = useNavigation();

  const textLenght = 15;

  const [characters, setCharacters] = useState([]);
  const [characterCount, setCharacterCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = async (page = 1) => {
    setIsFetching(true);
    const response = await Services.GetCharacters(page, search);
    if (response) {
      setPageCount(response.info?.pages || 1);
      setCharacterCount(response.info?.count || 0);
      setIsFetching(false);
      return response.results;
    } else {
      setPageCount(1);
      setCharacterCount(0);
      setIsFetching(false);
      return [];
    }
  };

  const setCharactersData = async (isSearch = false) => {
    const response = await getCharacters(currentPage);
    const newCharacters = isSearch ? response : [...characters, ...response];
    setCharacters(newCharacters);
  };

  useEffect(() => {
    setCharactersData();
  }, [currentPage]);

  useEffect(() => {
    setCharacters([]);
    setCurrentPage(1);
    setCharactersData(true);
  }, [search]);

  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <TopBar
        title="Rick and Morty"
        subtitle={`List of characters (${characterCount})`}
      />
      <HomeFilter
        onSearch={(text) => setSearch(text)}
        onClear={() => setSearch("")}
        setLoad={setIsLoading}
      />

      {isLoading ? (
        <Layout
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 50,
          }}
        >
          <Spinner status="success" size="large" />
        </Layout>
      ) : characters.length > 0 ? (
        <>
          <FlatList
            onEndReachedThreshold={1}
            onEndReached={() => {
              if (currentPage < pageCount) {
                setCurrentPage(currentPage + 1);
              }
            }}
            numColumns={2}
            data={characters}
            renderItem={({ item, index }) => (
              <Layout
                style={{
                  width: "50%",
                  padding: 5,
                  height: 220,
                }}
              >
                <Card
                  onPress={() =>
                    navigation.navigate("Detail", { character: item })
                  }
                  appearance="filled"
                  style={{
                    height: "100%",
                    backgroundColor: "#151A2F",
                    borderRadius: 6,
                  }}
                  level="3"
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 150,
                    }}
                    source={{ uri: item.image }}
                  />
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
                </Card>
              </Layout>
            )}
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
        !isLoading &&
        !isFetching &&
        characters.length === 0 && (
          <Text
            category="h1"
            style={{ textAlign: "center", marginTop: 30, opacity: 0.5 }}
          >
            No Data
          </Text>
        )
      )}
    </Layout>
  );
};

export default HomeView;
