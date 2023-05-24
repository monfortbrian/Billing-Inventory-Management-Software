import { NextFunction, Request, Response } from 'express'

export const inventoryMiddleware = (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 // @ts-ignore
 let user = req.user

 if (
  user.role.trim() === 'superAdmin' ||
  user.role.trim() === 'boss' ||
  user.role.trim() === 'manager'
 ) {
  next()
 } else
  res.json({
   success: false,
   message: "you don't have  privilegees to access this ressources!!",
  })
}

export const posMiddleware = (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 // @ts-ignore
 let role = req.user.role?.trim()

 if (
  role === 'superAdmin' ||
  role === 'boss' ||
  role === 'manager' ||
  role === 'accounter'
 ) {
  next()
 } else
  res.json({
   success: false,
   message: "you don't have  privilegees to access this ressources!!",
  })
}

export const superAdmin = (req: Request, res: Response, next: NextFunction) => {
 // @ts-ignore
 console.log('role:', req.user?.role)
 // @ts-ignore
 let role = req.user.role?.trim()
 if (role === 'superAdmin' || role === 'boss') {
  next()
 } else
  res.json({
   success: false,
   message: "you don't have  privilegees to access this ressources!!",
  })
}
