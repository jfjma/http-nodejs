import {Router} from 'express'
const router = Router()

import * as studentsController from '../controllers/students.controller'
import { authjwt } from '../middlewares';

router.post('/', [authjwt.verifyToken, authjwt.isProfesor], studentsController.createStudent)
router.get('/', studentsController.getStudents)
router.get('/:studentId', studentsController.getStudentById)
router.put('/:studentId', [authjwt.verifyToken, authjwt.isProfesor], studentsController.updateStudentById)
router.delete('/:studentId', [authjwt.verifyToken, authjwt.isAdmin], studentsController.deleteStudentById)

export default router;