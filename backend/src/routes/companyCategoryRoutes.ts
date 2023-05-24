import { Router } from 'express'
import {
 //  create,
 getAll,
 getById,
} from '../controllers/companyCategoryController'
import authMiddleware from '../middleware/authMiddleware'

const router = Router()
router.route('/').get(getAll)
router.route('/:id').get(getById)
export default router
