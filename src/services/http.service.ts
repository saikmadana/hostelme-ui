import { httpPayload } from "../models/http-payload.model";

const API: any = {
    user: "users.json"
}

export const METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

const serverUrl = "json";

export const getAPIUrl = (path: string): string => {
    return `${serverUrl}/${API[path]}`;
}

export const getMethod = (method: string): string => {
    if (!method) return METHODS.GET;
    return method;
}

export const getHeaders = (): Headers => {
    return new Headers({
        'Content-Type': 'application/json'
    });
}

export const getBody = (payload: httpPayload): any | null => {
    if (payload.method === METHODS.GET) return null;
    return payload.body;
}

export const makeAPIrequest = async (payload: httpPayload) => {
    try {
        const response = await fetch(getAPIUrl(payload.path), {
            method: getMethod(payload.method),
            headers: getHeaders(),
            body: getBody(payload)
        });
        return response.json();
    } catch(err) {
        console.error(err, "Error in API request");
        throw new Error("Error in getting API data");
    }
}



