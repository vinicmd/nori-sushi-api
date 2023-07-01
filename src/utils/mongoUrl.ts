export const mongoUrl = (): string => {
  const idDevelopment = process.env.DEVELOPMENT_MODE
  return idDevelopment
    ? 'mongodb://localhost:27017'
    : `${process.env.MONGO_URL}`
}
