import express from 'express';
import { authController } from "../controllers";
import { userJWT } from "../helper";

const router = express.Router();

router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.post('/otp/verify', authController.otp_verification)
router.post('/forgot-password', authController.forgot_password)
router.post('/reset-password', authController.reset_password)
router.post('/resend-otp', authController.resend_otp)
router.post('/change-password', authController.change_user_password)
router.post('/update-profile', userJWT, authController.update_profile)

export const authRouter = router; 