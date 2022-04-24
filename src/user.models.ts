import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import {Document} from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    phone: number;

    @Prop()
    skill: [];

    @Prop()
    hobby: [];

    @Prop({default:Date.now})
    date_added: Date

}

export const UserSchema =  SchemaFactory.createForClass(User);