export function nameResolver(
  filename: string,
  remove?: boolean,
  noTimeStamp?: boolean,
) {
  if (remove) {
    const imageName = filename.split('.')[0].replace(/\s/g, '')
    return imageName
  }

  const file = filename.replace(/\s/g, '_')
  if (noTimeStamp) return file

  const dateNow = new Date().getTime()
  if (!filename.includes(' ')) return `${dateNow}-${filename}`

  return `${dateNow}-${file}`
}
