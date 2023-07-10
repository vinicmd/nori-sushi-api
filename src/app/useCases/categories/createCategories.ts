import {Request, Response} from 'express'
import {Category} from '../../models/Category'
import {errorHandler} from '../../../utils/errorHandle'

export async function createCategories(req: Request, res: Response) {
  try {
    const {icon, name, order} = req.body

    const category = await Category.create({icon, name, order})

    res.status(201).json(category)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
