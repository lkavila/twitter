import { get, post } from "./http";

const createTweet = async (content, token) => {
    const json = await post("tweets", content, token);
    return json;
}

const getTweets = async (token) => {
    const json = await get("tweets", token);
    return json;
}

export { createTweet, getTweets }