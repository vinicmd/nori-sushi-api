import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function listOneOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params
    const order = await Order.find()
      .populate('products.product')
      .where('_id')
      .equals(orderId)

    res.json(order)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
