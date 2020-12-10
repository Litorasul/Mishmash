import { IReview, IReviewInItemDetails } from './review';

export interface IUser {
    username: string;
    email: string;
    profilePicUrl: string;
    objectId: string;
    userToken: string;
}

export interface IUserInProfile {
    username: string;
    email: string;
    profilePicUrl: string;
    objectId: string;
    address: string;
    city: string;
    country: string;
    reviews: IReview[];
}

export interface IUserInItemDetails {
    username: string;
    objectId: string;
    reviews: IReviewInItemDetails[];
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
