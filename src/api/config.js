import axios from "axios";

var instance = axios.create({
  baseURL: "https://tetris-412b.restdb.io/rest",
  headers: {
    "x-apikey": process.env.REACT_APP_RESTDB_API_KEY,
    "cache-control": "no-cache"
  }
});

export default instance;
