export interface httpPayload {
    path: string;
    method: string;
    body?: any;
    local?: boolean;
}