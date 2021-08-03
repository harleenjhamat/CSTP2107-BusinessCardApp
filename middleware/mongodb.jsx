/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description:
 *      This file is for using mongoose
 */

import mongoose from 'mongoose';

const connectDB = handler => async(req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.mongodburl, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    });
    return handler(req, res);
};

export default connectDB;