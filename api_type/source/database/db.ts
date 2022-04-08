const mysql = require('mysql2');
import * as dbConfig from "../config/db.config";

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect((error: any) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

export = connection;