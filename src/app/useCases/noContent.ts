import {Request, Response} from 'express'

export async function noContent(req: Request, res: Response) {
  return res.sendStatus(204)
}
