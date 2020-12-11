import { IPicture } from './picture';

export interface IItemInList {
    country: string;
    city: string;
    price: number;
    name: string;
    objectId: string;
    pictures: IPicture[];
}

export interface IItemDetails {
    country: string;
    city: string;
    price: number;
    name: string;
    objectId: string;
    ownerId: string;
    address: string;
    description: string;
    pictures: IPicture[];
}

export interface IItemToAdd {
    country: string;
    city: string;
    price: number;
    name: string;
    category: string;
    objectId: string;
    ownerId: string;
    address: string;
    description: string;
    pictures: IPicture[];
}

export interface IItemForSale {
    country: string;
    city: string;
    price: number;
    name: string;
    address: string;
    description: string;
    pictures: IPicture[];
}
