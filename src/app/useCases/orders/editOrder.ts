import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function editOrder(req: Request, res: Response) {
  try {
    const {orderId} = req.params
    const {table, products, status} = req.body

    await Order.findByIdAndUpdate(orderId, {
      table,
      products,
      status,
    })

    const order = await Order.find()
      .populate('products.product')
      .where('_id')
      .equals(orderId)

    res.status(204).json(order)
  } catch (error) {
    errorHandler(req, res, 400, error as Error)
  }
}
