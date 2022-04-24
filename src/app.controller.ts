import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { userInfo } from 'os';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Post()
  // async createUser(@Body() userDto : User){
  //   return this.appService.createUser(userDto)
  // }

  @Post()
    async createUser(@Res() response, @Body() userDto: User) {
        const newUser = await this.appService.createUser(userDto);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }


  @Get()
  readUser(){
    return this.appService.readUser()
  }

  @Put(':id')
  async updateUser(
    @Param('id') id:string ,@Body() updateData:UserUpdateDto
    ):Promise<User>{
    return this.appService.updateUser(id,updateData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
}

