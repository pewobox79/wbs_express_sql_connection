//connect to db pool
import 'dotenv/config'
import pkg from 'pg';
const {Pool} = pkg;

export const pool = new Pool({
    user:process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE_ID,
    password: process.env.DB_PASSWORD
})