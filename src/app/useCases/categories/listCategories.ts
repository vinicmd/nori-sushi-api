import {Request, Response} from 'express'
import {Category} from '../../models/Category'
import {errorHandler} from '../../../utils/errorHandle'

export async function listCategories(req: Request, res: Response) {
  try {
    const category = await Category.find().sort('order')

    res.json(category)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
