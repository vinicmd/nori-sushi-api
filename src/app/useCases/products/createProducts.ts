import {Request, Response} from 'express'
import {Product} from '../../models/Product'
import {uploadImageService} from '../../services/uploadImageService'
import {errorHandler} from '../../../utils/errorHandle'

export async function createProduct(req: Request, res: Response) {
  try {
    const {name, price, category, isBuffet, type} = req.body
    const {file} = req

    const imagePath = await uploadImageService(file)

    const product = await Product.create({
      name,
      price,
      category,
      isBuffet,
      type,
      imagePath,
    })
    return res.status(201).json(product)
  } catch (error) {
    errorHandler(req, res, 400, error as Error)
  }
}
