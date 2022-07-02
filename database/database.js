import Sequelize from 'sequelize';

export const sequelize = new Sequelize('postgres', 'khangne', '123456', {
    host: 'localhost',
    dialect: 'postgres',
});
