export interface IConversation {
    ownerId: string;
    updated: Date;
    created: Date;
    ownerUserName: string;
    receiverUserName: string;
    messages: IMessage[];
    objectId: string;
}

export interface IConversationToCreate {
    ownerUserName: string | undefined;
    receiverUserName: string;
}

export interface IMessage {
    text: string;
    ownerId: string;
    objectId: string;
    ownerUserName: string;
    created: Date;
}
