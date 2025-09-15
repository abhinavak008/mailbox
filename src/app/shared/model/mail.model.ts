export interface Mail {
    id: number;
    sender: string;
    subject: string;
    message: string;
    time: string;  
    avatar: string;
    attachments?: any;
}
