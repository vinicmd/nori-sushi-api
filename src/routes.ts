import {Router} from 'express'

import {alive} from './app/useCases/alive'
import {checkHeaders} from './utils/checkHeaders'
import {noContent} from './app/useCases/noContent'
import * as Categories from './app/useCases/categories'
import * as Products from './app/useCases/products'
import * as Orders from './app/useCases/orders'
import {multerController} from './app/controller/multerController'

export const router = Router()

router.get('/favicon.ico', noContent)
router.get('/robots.txt', noContent)

router.use(checkHeaders)

// it's alive!
router.get('/', alive)

// list categories
router.get('/categories', Categories.listCategories)

// create categories
router.post('/categories', Categories.createCategories)

// edit category
router.put('/categories/:categoryId', Categories.editCategory)

// list products
router.get('/products', Products.listProducts)

// create products
router.post(
  '/products',
  multerController.single('image'),
  Products.createProduct,
)

// edit products
router.put(
  '/products/:productId',
  multerController.single('image'),
  Products.editProduct,
)

// delete products
router.delete('/products/:productId', Products.deleteProduct)

// get products by category
router.get(
  '/categories/:categoryId/products',
  Categories.listProductsByCategory,
)

// create orders
router.post('/orders', Orders.createOrder)

// list orders
router.get('/orders', Orders.listOrders)

// list orders
router.get('/orders/:orderId', Orders.listOneOrder)

// list all orders
router.get('/allorders', Orders.listAllOrders)

// change order status
router.patch('/orders/:orderId', Orders.changeStatusOrder)

// edit order
router.put('/orders/:orderId', Orders.editOrder)

// delete order
router.delete('/orders/:orderId', Orders.deleteOrder)

// default routes
router.get('*', function (_, res) {
  return res.sendStatus(404)
})
