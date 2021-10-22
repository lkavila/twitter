import { get } from "./http";

const getTweet = async (id) => {
    const json = await get(`tweets/get-one/${id}`);
    return json;
}

export { getTweet }
