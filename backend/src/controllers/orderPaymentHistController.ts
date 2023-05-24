import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import OrderPaymentHistModel from '../models/orderPaymentHistModel'

// import { User } from '../utils/types'

export const create = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderPaymentHistModel()
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
  let model = new OrderPaymentHistModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderPaymentHistModel()
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const update = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderPaymentHistModel()
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
