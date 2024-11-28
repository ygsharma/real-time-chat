
export type UserId = string;

export interface Chat {
    id: string,
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[];
}


export abstract class Store {
    
    initRoom(roomId: string) {

    }

    getChats(roomId: string, limit: number, offset: number) {

    }

    addChat(userId: UserId, roomId: string, name: string, message: string) {

    }

    upvote(userId: UserId, room: string, chatId: string) {

    }
}