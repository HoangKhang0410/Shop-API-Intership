import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Staff } from './Staff.js';

export const Shop = sequelize.define('shops', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Shop.hasMany(Staff, {
    foreignKey: 'shopId',
    sourceKey: 'id',
});

Staff.belongsTo(Shop, {
    foreignKey: 'shopId',
    targetId: 'id',
});
