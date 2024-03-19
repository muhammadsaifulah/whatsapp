const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Define registerUser route handler using express-async-handler middleware
const registerUser = AsyncHandler(async (req, res) => {
    const { f_name, l_name, email, password, dob, gender } = req.body;

    // Check if any required field is missing
    if (!f_name || !l_name || !email || !password || !dob || !gender) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const isUserPresent = await User.find({
        email
    })
    if(isUserPresent){
        res.status(400);
        throw new Error ('user already exist')
    }else {
        const createdUser = await User.create({
            f_name, l_name, email, password, dob, gender 
        });
        res.send(createdUser);
    }


});


module.exports = {
    registerUser
};
