import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

//   @Post()
//   async create(@Body() user: Partial<User>) {
//     return this.usersService.create(user);
//   }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
