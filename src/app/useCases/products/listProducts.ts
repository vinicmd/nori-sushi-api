import {Request, Response} from 'express'
import {Product} from '../../models/Product'
import {errorHandler} from '../../../utils/errorHandle'

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find()

    res.json(products)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
