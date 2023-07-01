import {Request, Response, NextFunction} from 'express'

export function checkHeaders(req: Request, res: Response, next: NextFunction) {
  const {authorization} = req.headers

  if (req.path !== '/' && authorization !== process.env.AUTHORIZATION) {
    return res.sendStatus(403)
  }
  next()
}
