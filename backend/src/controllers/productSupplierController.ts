import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import ProductSupplierModel from '../models/productSupplierModel'

// import { User } from '../utils/types'

export const create = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductSupplierModel()
  //   @ts-ignore
  let body = { ...req.body, userId: req.user.id }
  model.create(body, (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const getAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductSupplierModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductSupplierModel()
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const update = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductSupplierModel()
  model.update(
   parseInt(req.params.id),
   req.body,
   (err: Error | null, doc: Object) => {
    if (err) return next(new Error(err.message))
    res.json(doc)
   }
  )
 }
)
