import { Timestamp } from "rxjs/internal/operators/timestamp";

export class Message {
    body: string;
    isRead: boolean;
    receiver: string;
    sender: string;
    timestamp: Date;

    constructor(body = '', isRead = false, receiver = '', sender = '') {
        this.body = body;
        this.isRead = isRead;
        this.receiver = receiver;
        this.sender = sender;
        this.timestamp = new Date();
    }
}