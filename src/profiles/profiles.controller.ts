import { Controller,Get,Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
    //Get /profiles
    @Get()
    findAll(@Query('age')age:number){
         return [{age}]
    }
}
 