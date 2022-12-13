import {Router} from 'express'

const router = Router()
import * as userController from '../controllers/user.controller'
import {authjwt} from '../middlewares'

router.post('/', [authjwt.verifyToken, authjwt.isAdmin], userController.createUser)
router.get('/', userController.getUsers)

export default router;