import {Request, Response} from 'express'

export async function errorHandler(
  req: Request,
  res: Response,
  statusCode: number,
  error?: Error,
) {
  try {
    const botChatToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    const {path, method, ip, headers} = req

    const message = `Method: ${method}, %0APath: ${path},${
      error ? '%0AError: ' + JSON.stringify(error) : ''
    }%0AIP: ${ip}, %0AHeaders: ${JSON.stringify(headers)}`

    const url = `https://api.telegram.org/bot${botChatToken}/sendMessage?chat_id=${chatId}&text=${
      '```JSON%0A' + message + '```'
    }&parse_mode=markdown`

    await fetch(url, {
      method: 'GET',
    })
  } catch (error) {
    errorHandler(req, res, 503, error as Error)
  } finally {
    res.sendStatus(statusCode)
  }
}
