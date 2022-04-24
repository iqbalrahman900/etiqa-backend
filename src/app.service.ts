import { Inject, Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import {User, UserDocument} from './user.models';
import { Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  //create 
  async createUser(user: User): Promise<User>{
    console.log("abeeee ", user);
    
    
    const newUser = new this.userModel(user)
    console.log("new user ", newUser);
    return newUser.save();
    
  }

  async readUser(){
    return this.userModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateUser(id,data):Promise<User>{
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data 
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id)
  }
}
