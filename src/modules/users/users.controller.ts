import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import axiosInstance  from 'src/utils/axios';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('summarize')
  async postToPythonApi(@Body() data: any) {
    try {
      // ודא ש- data כולל את שדה ה- text
      const postData = { text: data.text };

      // קריאת POST לשרת פייתון
      const response = await axiosInstance.post('/summarize', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data; // החזרת התגובה שהתקבלה משרת הפייתון
    } catch (error) {
      // טיפול בשגיאות
      console.error('Error calling Python API:', error);
      return { message: 'Error calling Python API', error: error.message };
    }
  }
  

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
