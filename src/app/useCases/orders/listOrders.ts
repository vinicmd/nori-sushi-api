import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function listOrders(req: Request, res: Response) {
  const {status} = req.body
  try {
    const orders = await Order.find()
      .populate('products.product')
      .where('status')
      .equals(`${status ? status : 'OPEN'}`)
      .sort({createdAt: -1})

    res.json(orders)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
