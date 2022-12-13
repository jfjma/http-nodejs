import {Router} from 'express'
const router = Router()

import * as authController from '../controllers/auth.controller'

router.post('/signin', authController.signIn)
router.post('/signup', authController.signUp)

export default router;