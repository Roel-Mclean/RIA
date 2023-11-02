import mongoose from "mongoose";

// verifying connection, if no connection, it makes a new connection
export function mongooseConnect() {
    if (mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }
    else {
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri);
    }
}