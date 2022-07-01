import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/albums",
});

export const getAlbums = async (_page = 1, _limit = 10) => {
  const { data } = await instance.get("/", {
    params: {
      _page,
      _limit,
    },
  });
  return data;
};
