import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import OrderModel from '../models/orderModel'

import { IOrderResponce } from '../utils/types'
export const create = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderModel()
  let { order } = req.body
  //   @ts-ignore
  order['employeId'] = req.user.id
  let body = { ...req.body, order }
  model.create(body, (err: Error | null, doc: IOrderResponce) => {
   //    if (err) return res.json({ success: false, message: err })
   res.json(doc)
  })
 }
)

export const getAll = asyncHandler(
 async (__, res: Response, next: NextFunction) => {
  let model = new OrderModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderModel()
  model.getById(
   parseInt(req.params.id),
   (err: Error | null, doc: IOrderResponce) => {
    if (err) return next(new Error(err.message))
    res.json(doc)
   }
  )
 }
)

export const syncAll = asyncHandler(
 (req: Request, res: Response, next: NextFunction) => {
  let model = new OrderModel()
  for (let i = 0; i < req.body.orders; i++) {
   model.create(
    req.body.orders[i],
    (err: Error | null, doc: IOrderResponce) => {
     if (err) return next(new Error(err.message))
     if (!doc.success) {
      return res.json(doc.data)
     }
    }
   )
  }
  res.json({ success: true, data: 'synchronised successfully...' })
 }
)
