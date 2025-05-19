export type NotificationType = 'success' | 'error';

export interface NotificationInterface{
    show:boolean;
    message:string;
    type:NotificationType;
}
