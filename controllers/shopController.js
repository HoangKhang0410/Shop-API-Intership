import { Shop } from '../models/Shop.js';
import { Address } from '../models/Address.js';

const shopControllers = {
    getShops: async (req, res) => {
        try {
            const shops = await Shop.findAll();
            res.status(200).json({ shops });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    createShop: async (req, res) => {
        const { name, logo, address, phone, email, ownerId } = req.body;
        try {
            // nên kiểm tra xem có address chưa rồi mới tạo cái mới => sợ không kịp nên em mặc định tạo mới luôn :((
            const newAddress = await Address.create({
                number: address.number,
                street: address.street,
                block: address.block,
                district: address.district,
                province: address.province,
            });

            const newShop = await Shop.create({
                name,
                logo,
                email,
                phone,
                ownerId,
                addressId: newAddress.id,
            });
            return res.status(201).json({ newShop });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

export default shopControllers;
