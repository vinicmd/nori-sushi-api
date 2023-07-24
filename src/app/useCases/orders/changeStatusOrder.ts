import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function changeStatusOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params
    const {status, contributor} = req.body

    await Order.findByIdAndUpdate(orderId, {status, contributor})

    res.sendStatus(204)
  } catch (error) {
    errorHandler(req, res, 400, error as Error)
  }
}
