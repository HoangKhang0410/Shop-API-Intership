import express from 'express';
import { sequelize } from './database/database.js';
import authRoutes from './routes/authRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
// import './models/Address.js';
// import './models/Owner.js';
// import './models/Shop.js';
// import './models/Staff.js';
// import './models/Request.js';
const app = express();

async function main() {
    try {
        await sequelize.sync({ force: false });
        console.log('Connection has been established successfully');
        app.listen(4000, () => console.log('Server is listening on port', 4000));
    } catch (error) {
        console.log('unable to connect to the database:', error);
    }
}

main();

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/shop', shopRoutes);
