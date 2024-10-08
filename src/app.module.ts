import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/users.entity'; // ודאי שה-path נכון
import { UsersModule } from './modules/users/users.module'; // ודאי שה-path נכון
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: '(localdb)\\MSSQLLocaldb', // עדכני כאן ל-(localdb)\MSSQLLocaldb
    //   // username: 'sa', // שם המשתמש שלך
    //   // password: 'YourStrong!Passw0rd', // הסיסמה שלך
    //   database: 'ReportUsers', // שם מסד הנתונים שלך
    //   entities: [User], // מסלול לאובייקטים של המודל
    //   synchronize: true, // להגדיר ל-true רק לפיתוח
    // }),
    UsersModule,
  ],
  controllers: [AppController,UsersController],
  providers: [AppService],
})
export class AppModule {}

