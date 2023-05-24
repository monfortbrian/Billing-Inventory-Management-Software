import { Response, Request, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import UnityMesureModel from '../models/unityMesureModel'

export const getAll = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new UnityMesureModel()
  model.getAll((err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const create = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new UnityMesureModel()

  model.create(req.body, (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)

export const getById = asyncHandler(
 async (req: Request, res: Response, next: NextFunction) => {
  let model = new UnityMesureModel()
  model.getById(parseInt(req.params.id), (err: Error | null, doc: Object) => {
   if (err) return next(new Error(err.message))
   res.json(doc)
  })
 }
)
