import axios from "axios";
import {URL} from '../constants/Config'
/**
 * It's not Artificial Intelligence, just an axios instance)
 * Actually we could just use default axios in this scenario, but there might be multiple instances as well
 * other configurations such as interceptors for adding tokens may be implemented here
 */
const ai = axios.create({
    baseURL: URL,
});

ai.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => Promise.reject(error.response) // may set error state here if possible
);

export default ai;