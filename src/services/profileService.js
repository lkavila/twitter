import { get } from "./http";


const getUserTweets = async (username) => {
    const json = await get(`tweets/user/${username}`);
    return json;
}


export { getUserTweets }