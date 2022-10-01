import Axios from "./index";

const GetCharacters = async (page = 1, name = "") => {
  try {
    const filter = name.trim().length > 0 ? `&name=${name}` : "";
    const response = await Axios.get(`/character/?page=${page}${filter}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const functions = {
  GetCharacters,
};

export default functions;
