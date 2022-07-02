import { UUIDV4 } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Shop } from './Shop.js';
import { Staff } from './Staff.js';
export const Address = sequelize.define('addresses', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    block: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Address.hasOne(Shop, {
    foreignKey: 'addressId',
    sourceKey: 'id',
});

Shop.belongsTo(Address, {
    foreignKey: 'addressId',
    targetId: 'id',
});

Address.hasOne(Staff, {
    foreignKey: 'addressId',
    sourceKey: 'id',
});

Staff.belongsTo(Address, {
    foreignKey: 'addressId',
    targetId: 'id',
});
