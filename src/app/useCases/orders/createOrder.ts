import {Request, Response} from 'express'
import {Order} from '../../models/Order'
import {errorHandler} from '../../../utils/errorHandle'

export async function createOrder(req: Request, res: Response) {
  try {
    const {table, products} = req.body

    const order = await Order.create({
      table,
      products,
    })

    res.status(201).json(order)
  } catch (error) {
    errorHandler(req, res, 400, error as Error)
  }
}
