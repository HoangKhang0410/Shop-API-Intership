import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Owner } from './Owner.js';
import { Staff } from './Staff.js';

export const Request = sequelize.define('requests', {
    ownerId: {
        type: DataTypes.UUID,
        references: {
            model: Owner,
            key: 'id',
        },
    },
    staffId: {
        type: DataTypes.UUID,
        references: {
            model: Staff,
            key: 'id',
        },
    },
    isAccept: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isOwnerSend: {
        type: DataTypes.STRING,
        defaultValue: false,
    },
});

Staff.belongsToMany(Owner, { through: Request });
Owner.belongsToMany(Staff, { through: Request });
