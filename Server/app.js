import dotenv from 'dotenv';
dotenv.config();
//Lib
import express from 'express';
import cors from 'cors';

//ErrorHandler
import errorHandler from './helpers/error.handler.helper.js';
//Routes
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js';
import productRoute from './routes/product.route.js';
import authRoute from './routes/auth.route.js';
import accountRoute from './routes/account.route.js';
import categoryRoute from './routes/category.route.js';
import voucherRoute from './routes/voucher.route.js';
import authorRoute from './routes/author.route.js';
import publisherRoute from './routes/publisher.route.js';
import statusRoute from './routes/status.route.js';
import orderRoute from './routes/order.route.js';
import paymentRoute from './routes/payment.route.js';
import commentRoute from './routes/comment.route.js';
// Database
import connect from './models/database.js'; 
connect();

//Init
const app = express()
app.use(express.json())
app.use(cors())

//Api
app.use('/', homeRoute);
app.use('/admin', adminRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/accounts', accountRoute);
app.use('/category', categoryRoute)
app.use('/vouchers', voucherRoute);
app.use('/authors', authorRoute);
app.use('/publishers', publisherRoute);
app.use('/status', statusRoute);
app.use('/orders', orderRoute);
app.use('/payment',paymentRoute);
app.use('/comments',commentRoute);
app.use(errorHandler);

app.use('/uploads', express.static('uploads')); //display photo in folder "uploads"

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Chạy trên cổng [" + PORT + "]"));
