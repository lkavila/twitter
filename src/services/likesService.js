import { post } from "./http";

const createLike = async (like, tweetId) => {
    const content = {
        like: like,
        tweetId: tweetId
    }
    const json = await post("tweets/likes", content);
    return json;
}

export { createLike }