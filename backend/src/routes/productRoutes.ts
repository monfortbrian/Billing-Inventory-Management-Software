import { Router } from 'express'
import {
 create,
 getAll,
 getById,
 getByCategory,
 syncAll,
 update,
} from '../controllers/productController'
import authMiddleware from '../middleware/authMiddleware'
import { inventoryMiddleware } from '../middleware/privilegeesMiddlewares'

const router = Router()
router.route('/').post(authMiddleware, inventoryMiddleware, create).get(getAll)
router.route('/:id').get(getById).put(update)
router.route('/synchronise').post(syncAll)
router.route('/category/:id').get(getByCategory)
export default router
