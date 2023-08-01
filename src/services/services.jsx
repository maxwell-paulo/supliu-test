import axios from "axios";
import headers from "./headers";

axios.defaults.baseURL = "http://localhost:5173/";

async function genericRequest(axiosFn, ...params) {
  try {
    const result = await axiosFn(...params);
    return result;
  } catch (error) {
    return error.response;
  }
}

const api = {
  async readAlbums() {
    return genericRequest(axios.get, "https://tiao.supliu.com.br/api/album", {
      headers,
    });
  },

  async deleteAlbum({ id }) {
    return genericRequest(
      axios.delete,
      `https://tiao.supliu.com.br/api/album/${id}`,
      {
        headers,
      }
    );
  },

  async deleteTrack({ id }) {
    return genericRequest(
      axios.delete,
      `https://tiao.supliu.com.br/api/track/${id}`,
      {
        headers,
      }
    );
  },
};

export default api;
