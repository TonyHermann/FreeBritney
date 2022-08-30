import axios from "axios";

const baseUrl = "https://tonyhermann.github.io/FreeBritney/dist/misc/retos.json";

export const getRetosFromGH = async () => {
    const {data} = await axios.get(baseUrl);
    return data;
};