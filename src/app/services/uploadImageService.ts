import {v2 as cloudinary} from 'cloudinary'
import fs from 'node:fs'
import {nameResolver} from '../../utils/nameResolver'

interface CloudinaryError extends Error {
  http_code: number
}

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
})

export async function uploadImageService(file?: Express.Multer.File) {
  try {
    if (!file) return ''
    const {path, originalname} = file

    const upload = await cloudinary.uploader.upload(
      path,
      {
        public_id: nameResolver(originalname, false, false),
        folder: process.env.NODE_ENV || 'development',
      },
      function (error) {
        fs.unlinkSync(path)

        if (error) return new Error(error.message)
      },
    )
    return upload.url
  } catch (error: unknown) {
    const cloudinaryError = error as CloudinaryError
    throw new Error(cloudinaryError.message)
  }
}
