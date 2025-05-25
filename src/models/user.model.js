import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { use } from "react";


const userSchema = new mongoose.Schema({  
    nameName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    avtart: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },
    watchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
    }],
    refreshToken: {
        type: String,
    
    },
  }, { timestamps: true });


userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    const token = jwt.sign({ 
        id: this._id, email: this.email, fullName: this.fullName
    }, process.env.ACCESS_TOKEN_SECRET, { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" 
    });
    return token;
}

userSchema.methods.generateRefreshToken = function () {
    const refreshToken = jwt.sign({ 
        id: this._id
    }, process.env.REFRESH_TOKEN_SECRET, { 
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d" 
    });
    return refreshToken;
}

export const User = mongoose.model("User", userSchema);

