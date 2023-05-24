import { Router } from 'express'
import { create, getAll, getById } from '../controllers/supplierController'
import authMiddleware from '../middleware/authMiddleware'
import { superAdmin } from '../middleware/privilegeesMiddlewares'

const router = Router()
router
 .route('/')
 .post(authMiddleware, superAdmin, create)
 .get(authMiddleware, getAll)
router.route('/:id').get(authMiddleware, getById)
export default router
