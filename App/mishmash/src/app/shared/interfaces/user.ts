export interface IUser {
    name: string;
    email: string;
    profilePicUrl: string;
    objectId: string;
    'user-token': string;
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