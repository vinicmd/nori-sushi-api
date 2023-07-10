import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function listAllOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .populate('products.product')
      .sort({createdAt: -1})

    res.json(orders)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
