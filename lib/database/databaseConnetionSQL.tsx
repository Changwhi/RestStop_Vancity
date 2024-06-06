import mysql from 'mysql2/promise';

const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "password",
  database: 'washrooms',
  multipleStatements: false,
  namedPlaceholders: true
};

var mySqlDatabase = mysql.createPool(dbConfig);

export default mySqlDatabase