import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as sql from 'mssql'; // הוספת import של sql

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) {}

    async initializeDatabase() {
        await this.databaseService.connectToDatabase();
    }

    async getUsers() {
        const data = await this.databaseService.getData();
        return data; // החזרת רשימת המשתמשים
    }

    async createUser(userData) {
        const pool = await this.databaseService.connectToDatabase();
        await pool.request()
            .input('name', sql.NVarChar, userData.name)
            .input('email', sql.NVarChar, userData.email)
            .query('INSERT INTO Users (Name, Email) VALUES (@name, @email)');
    }
}
