import {Request, Response, NextFunction} from 'express'
import {errorHandler} from './errorHandle'

export function checkHeaders(req: Request, res: Response, next: NextFunction) {
  const {authorization} = req.headers
  const {path} = req

  if (path !== '/' && authorization !== process.env.AUTHORIZATION) {
    const error: Error = {
      message: 'Forbidden path.',
      name: 'forbidden',
    }
    return errorHandler(req, res, 403, error)
  }
  next()
}
