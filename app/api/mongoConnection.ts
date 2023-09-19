import { MongoClient } from 'mongodb'

const client = await MongoClient.connect(process.env.MONGO_CONNECTION_STRING!)
export const rawDb = client.db()
