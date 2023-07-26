import {Request, Response} from 'express'
import {Product} from '../../models/Product'
import {errorHandler} from '../../../utils/errorHandle'
import {uploadImageService} from '../../services/uploadImageService'

export async function editProduct(req: Request, res: Response) {
  try {
    const {productId} = req.params
    const {name, price, category, isBuffet, type} = req.body
    const {file} = req

    const imagePath = await uploadImageService(file)

    await Product.findByIdAndUpdate(productId, {
      name,
      price,
      category,
      isBuffet,
      type,
      imagePath,
    })

    return res.sendStatus(204)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
