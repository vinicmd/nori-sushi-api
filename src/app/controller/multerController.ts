import multer from 'multer'
import path from 'node:path'
import {nameResolver} from '../../utils/nameResolver'

export const multerController = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, nameResolver(file.originalname, false, false))
    },
  }),
})
