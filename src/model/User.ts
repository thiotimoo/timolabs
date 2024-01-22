import mongoose from "mongoose";

export interface IUser {
    username: string;
    email: string;
    picture: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    _id: string;
}

const User = new mongoose.Schema<IUser>(
    {
        username: String,
        email: String,
        picture: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.User<IUser> ||
    mongoose.model<IUser>("User", User);
