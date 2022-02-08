import { Sequelize } from "sequelize";
 
const database = new Sequelize(
    process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host:process.env.MYSQL_HOST, 
    dialect: "mysql"
});
 
export default database;


// port:process.env.MYSQL_PORT,
// database:process.env.MYSQL_DATABASE,
// user: process.env.MYSQL_USER,
// password:process.env.MYSQL_PASSWORD