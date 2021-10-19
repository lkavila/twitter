import { get } from "./http";

const getUsersList = async () => {
    const json = await get(`users`);
    return json;
}


export { getUsersList }