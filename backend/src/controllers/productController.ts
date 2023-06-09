import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import ProductModel from '../models/productModel'
import { User } from '../utils/types'
// import { User } from '../utils/types'

export const create = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()
  model.create(req.body, (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const getAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()
  console.log('id here', req.params.id)
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getByCategory = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()
  model.getByCategory(
   parseInt(req.params.id),
   (err: Error | null, doc: Object) => {
    if (err) return next(new Error(err.message))
    res.json(doc)
   }
  )
 }
)
export const update = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()
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

export const syncAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new ProductModel()

  model.sync(
   req.body.products,
   req.body.offLineTime,
   (err: Error | null, doc: Object) => {
    if (err) return next(new Error(err.message))
    res.json(doc)
   }
  )
 }
)
