import React, { useEffect, useState } from "react";
import {
  Layout,
  Text,
  Spinner,
  TopNavigationAction,
} from "@ui-kitten/components";
import { FlatList } from "react-native";

import { HeartEmty } from "../components/icons";

import Services from "../services/characters";
import TopBar from "../components/base/top-bar";
import HomeFilter from "../components/base/home-filter";
import CardItem from "../components/base/card-item";
import { useNavigation } from "@react-navigation/native";

const HomeView = () => {
  const navigation = useNavigation();

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
        accessoryRight={() => (
          <TopNavigationAction
            icon={<HeartEmty color="#fff" />}
            onPress={() => navigation.navigate("Favorite")}
          />
        )}
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
