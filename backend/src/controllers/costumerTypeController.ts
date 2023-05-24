import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import CostumerTypeModel from '../models/costumerTypeModel'

export const getAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new CostumerTypeModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new CostumerTypeModel()
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
