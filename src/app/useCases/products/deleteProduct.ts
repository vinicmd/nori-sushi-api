import {Request, Response} from 'express'
import {Product} from '../../models/Product'
import {errorHandler} from '../../../utils/errorHandle'

export async function deleteProduct(req: Request, res: Response) {
  try {
    const {productId} = req.params

    await Product.findByIdAndDelete(productId)

    res.sendStatus(204)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
