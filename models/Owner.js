import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Shop } from './Shop.js';

export const Owner = sequelize.define('owners', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isAuthenticate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Owner.hasMany(Shop, {
    foreignKey: 'ownerId',
    sourceKey: 'id',
});

Shop.belongsTo(Owner, {
    foreignKey: 'ownerId',
    targetId: 'id',
});
