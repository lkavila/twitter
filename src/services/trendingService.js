import { get } from "./http";

const getTrending = async (username) => {
    const json = await get(`tweets/external/${username}`);
    return json;
}

export {getTrending}