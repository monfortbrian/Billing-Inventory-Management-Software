import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import CompanyCategoryModel from '../models/companyCategory'

export const getAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new CompanyCategoryModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new CompanyCategoryModel()
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
