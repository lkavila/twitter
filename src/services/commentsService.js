import { post } from "./http";

const createComment = async (text, tweetId) => {
    const content = {
        comment: text,
        tweetId: tweetId
    }
    const json = await post("tweets/comments", content);
    return json;
}

export { createComment }