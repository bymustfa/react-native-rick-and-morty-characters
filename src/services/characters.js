import Axios from "./index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetCharacters = async (page = 1, name = "") => {
  try {
    const filter = name.trim().length > 0 ? `&name=${name}` : "";
    const response = await Axios.get(`/character/?page=${page}${filter}`);
    const favoriteCharacters = await GetFavoriteCharacters();
    const characters = response.data.results.map((character) => {
      return {
        ...character,
        isFavorite: favoriteCharacters.includes(character.id),
      };
    });

    return {
      info: response.data.info,
      results: characters,
    };
  } catch (error) {
    return null;
  }
};

const GetMultipleCharacters = async (ids) => {
  try {
    const response = await Axios.get(`/character/${ids}`);
    const favoriteCharacters = await GetFavoriteCharacters();
    const characters = response.data.map((character) => {
      return {
        ...character,
        isFavorite: favoriteCharacters.includes(character.id),
      };
    });

    return characters;
  } catch (error) {
    return null;
  }
};

const GetFavoriteCharacters = async () => {
  try {
    const response = await AsyncStorage.getItem("favoriteCharacters");
    return response ? JSON.parse(response) : [];
  } catch (error) {
    return [];
  }
};

const AddFavoriteCharacter = async (characterId) => {
  try {
    const favoriteCharacters = await GetFavoriteCharacters();
    const newFavoriteCharacters = [...favoriteCharacters, characterId];
    await AsyncStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(newFavoriteCharacters)
    );
    return newFavoriteCharacters;
  } catch (error) {
    return [];
  }
};

const RemoveFavoriteCharacter = async (characterId) => {
  try {
    const favoriteCharacters = await GetFavoriteCharacters();
    const newFavoriteCharacters = favoriteCharacters.filter(
      (id) => id !== characterId
    );
    await AsyncStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(newFavoriteCharacters)
    );
    return newFavoriteCharacters;
  } catch (error) {
    return [];
  }
};

const CharacterIsFavorite = async (characterId) => {
  try {
    const favoriteCharacters = await GetFavoriteCharacters();
    return favoriteCharacters.includes(characterId);
  } catch (error) {
    return false;
  }
};

const functions = {
  GetCharacters,
  GetFavoriteCharacters,
  AddFavoriteCharacter,
  RemoveFavoriteCharacter,
  CharacterIsFavorite,
  GetMultipleCharacters,
};

export default functions;
