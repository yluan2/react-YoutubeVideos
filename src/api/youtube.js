import axios from "axios";

const KEY = "AIzaSyDXy2jwBLmXhuA1NdCV2OiTl1XIA83YjDo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
