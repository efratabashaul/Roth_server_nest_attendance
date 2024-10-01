import { Injectable } from '@nestjs/common';
import * as sql from 'mssql/msnodesqlv8';

@Injectable()
export class DatabaseService {
    private config = {
        server: 'DESKTOP-5PC3MK0', 
        options: {
            database: 'EmployeesDB', 
            trustedConnection: true, 
        }
    };

    private pool:sql.ConnectionPool ; // הוספת משתנה לשמור את ה-pool

    async connectToDatabase() {
        if (!this.pool) { // בדוק אם אין כבר חיבור
            try {
                this.pool = await sql.connect(this.config);
                console.log('Connected to the database!');
            } catch (err) {
                console.error('Database connection failed:', err);
                throw err; 
            }
        }
        return this.pool; // החזרת ה-pool
    }

    async getData() {
        try {
            const pool = await this.connectToDatabase(); // השג את ה-pool
            const result = await pool.request().query`SELECT * FROM User`; 
            return result.recordset; 
        } catch (err) {
            console.error('Error executing query:', err);
            throw err; 
        }
    }
}
