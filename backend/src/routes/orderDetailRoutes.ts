import { Router } from 'express'
import {
 create,
 getAll,
 getById,
 getByOrderNumber,
} from '../controllers/orderDetailController'
import authMiddleware from '../middleware/authMiddleware'
import { posMiddleware } from '../middleware/privilegeesMiddlewares'

const router = Router()
router
 .route('/')
 .post(authMiddleware, posMiddleware, create)
 .get(authMiddleware, getAll)
router.route('/:id').get(authMiddleware, getById)
router.route('/order/:orderNumber').get(authMiddleware, getByOrderNumber)

export default router
