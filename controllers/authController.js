import { Owner } from '../models/Owner.js';
import { Staff } from '../models/Staff.js';
import { Address } from '../models/Address.js';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';

const authControllers = {
    login: async (req, res) => {},
    register: async (req, res) => {
        const { isOwner, name, phone, email, password, birth, avatar, gender, address } = req.body;
        try {
            if (isOwner) {
                const owner = await Owner.findAll({
                    where: {
                        [Op.or]: [{ email: email }, { phone: phone }],
                    },
                });
                if (owner.length !== 0) return res.status(400).json('Email or Phone has already taken');
                const hashedPassword = await bcrypt.hash(password, 12);

                const newOwner = await Owner.create({
                    name,
                    phone,
                    email,
                    password: hashedPassword,
                    birth,
                    avatar,
                    gender,
                });

                return res.status(201).json({ newOwner });
            } else {
                const staff = await Staff.findAll({
                    where: {
                        [Op.or]: [{ email: email }, { phone: phone }],
                    },
                });
                if (staff.length !== 0) return res.status(400).json('Email or Phone has already taken');
                const hashedPassword = await bcrypt.hash(password, 12);
                const newAddress = await Address.create({
                    number: address.number,
                    street: address.street,
                    block: address.block,
                    district: address.district,
                    province: address.province,
                });
                const newStaff = await Staff.create({
                    name,
                    phone,
                    email,
                    password: hashedPassword,
                    birth,
                    avatar,
                    gender,
                    addressId: newAddress.id,
                });

                return res.status(201).json({ newStaff });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default authControllers;
