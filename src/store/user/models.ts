export interface Credentials {
    login: string;
    password: string;
}

export interface User {
    login: string;
    isAuthorized: boolean;
}