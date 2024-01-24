import mongoose from "mongoose";

export interface IUser {
    username: string;
    email: string;
    picture: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
    _id: string;
}

const User = new mongoose.Schema<IUser>(
    {
        username: String,
        email: String,
        role: String,
        picture: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.User<IUser> ||
    mongoose.model<IUser>("User", User);
