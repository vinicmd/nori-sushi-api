import {Request, Response} from 'express'
import {Category} from '../../models/Category'
import {errorHandler} from '../../../utils/errorHandle'

export async function editCategory(req: Request, res: Response) {
  try {
    const {categoryId} = req.params
    const {order, name, icon} = req.body

    await Category.findByIdAndUpdate(categoryId, {
      order,
      name,
      icon,
    })

    res.sendStatus(204)
  } catch (error) {
    errorHandler(req, res, 500, error as Error)
  }
}
