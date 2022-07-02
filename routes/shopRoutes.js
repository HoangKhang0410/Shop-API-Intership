import Router from 'express';
import shopControllers from '../controllers/shopController.js';

const router = Router();

router.get('/shops', shopControllers.getShops);
router.post('/', shopControllers.createShop);
router.get('/shops/:ownerId');

export default router;
