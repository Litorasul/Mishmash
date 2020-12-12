export interface IReview {
    rating: number;
    text: string;
}

export interface IReviewWithId {
    rating: number;
    text: string;
    objectId: string;
}

export interface IReviewInItemDetails {
    rating: number;
}
