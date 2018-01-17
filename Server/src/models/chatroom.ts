import { Document, Model, model } from 'mongoose';
import { IChatRoom } from '../interfaces/chatroom';
import { ChatRoomSchema } from '../schemas/chatroom';

export interface IChatRoomModel extends IChatRoom, Document {

}

export const ChatRoom: Model<IChatRoomModel> = model<IChatRoomModel> ('ChatRoom', ChatRoomSchema);
