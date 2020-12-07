export interface IUser {
    username: string;
    email: string;
    profilePicUrl: string;
    objectId: string;
    userToken: string;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IRegisterCredentials {
    name: string;
    email: string;
    profilePicUrl: string;
    password: string;
}