const express = require('express');

// Import the controllers
const { userSignup } = require('../controller/auth.controller');
const {sendOtpWithSms,sendOtpWithEmail,validateOTP,insertEmail} = require('../controller/apiHandlers.controller')

// Create a new router
const authRouter = express.Router();

// Define the routes using authRouter, not router
authRouter.post('/auth/userSignup', userSignup);
authRouter.post('/auth/sendOtpWithSms',sendOtpWithSms)
authRouter.post('/auth/sendOtpWithEmail',sendOtpWithEmail)
authRouter.post('/auth/validateOTP',validateOTP)
authRouter.post('/auth/insertEmail',insertEmail)

// Export the router
module.exports = authRouter;