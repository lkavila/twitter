import { get, post, deleteR } from "./http";

const createTweet = async (text) => {
    const content = {
        content: text
    }
    const json = await post("tweets", content);
    return json;
}

const getTweets = async () => {
    const json = await get("tweets");
    return json;
}

const getTweet = async (id) => {
    const json = await get(`tweets/get-one/${id}`);
    return json;
}

const deleteTweet = async (tweetId) => {
    const data = {
        tweetId: tweetId
    }
    const json = await deleteR("tweets", data);
    return json;

}

export { createTweet, getTweets, getTweet, deleteTweet }