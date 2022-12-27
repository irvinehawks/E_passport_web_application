import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, cellphone, password} = req.body;

    const userExists = await User.findOne({email});

    // If user is existing, return message user already exists!!
    if(userExists) {
        res.status(400).json({message: 'User already exists'})
    }

    //if user is not existing, create user!
    const user = await User.create({
        username,
        email,
        cellphone,
        password  
    })

    //if user is created successfully, return a message to the user!
    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            cellphone: user.cellphone
        })
    }

    else{
        res.status(401)
        throw new Error("Invalid user data!!")
    }
    

})

export default registerUser;
