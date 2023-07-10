import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function deleteOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params

    await Order.findByIdAndDelete(orderId)

    res.sendStatus(204)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
