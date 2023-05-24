import { Router } from 'express'
import {
 //  create,
 getAll,
 getById,
} from '../controllers/categoryController'
import authMiddleware from '../middleware/authMiddleware'
import { inventoryMiddleware } from '../middleware/privilegeesMiddlewares'

const router = Router()
router.route('/').get(getAll)
router.route('/:id').get(getById)
export default router
