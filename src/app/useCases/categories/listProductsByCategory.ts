import {Request, Response} from 'express'
import {Product} from '../../models/Product'
import {errorHandler} from '../../../utils/errorHandle'

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const {categoryId} = req.params
    const product = await Product.find().where('category').equals(categoryId)

    res.json(product)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
