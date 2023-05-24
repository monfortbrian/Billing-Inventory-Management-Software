import { Router } from 'express'
import {
 create,
 getAll,
 getById,
 syncAll,
} from '../controllers/orderController'
import authMiddleware from '../middleware/authMiddleware'
import { posMiddleware } from '../middleware/privilegeesMiddlewares'
const router = Router()
router.route('/').post(authMiddleware, posMiddleware, create).get(getAll)
router.route('/:id').get(getById)
router.route('/synchronise').post(syncAll)

export default router
