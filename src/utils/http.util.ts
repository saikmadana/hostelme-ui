import { httpPayload } from "../models/http-payload.model";

const API: any = {
    user: "users",
    room: "room"
}

export const METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

const serverUrl = "https://hostelme-node-backend.herokuapp.com/api";

export const getAPIUrl = (path: string, local?: boolean): string => {
    let server = local ? "http://localhost:3000/api" : serverUrl
    return `${server}/${API[path]}`;
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
        const response = await fetch(getAPIUrl(payload.path, payload.local), {
            method: getMethod(payload.method),
            headers: getHeaders(),
            body: JSON.stringify(getBody(payload))
        });
        return response.json();
    } catch(err) {
        console.error(err, "Error in API request");
        throw new Error("Error in getting API data");
    }
}



