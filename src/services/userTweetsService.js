import { get } from "./http";


const getTweets = async () => {
    const json = await get("tweets/user?id=");
    return json;
}


export { getTweets }