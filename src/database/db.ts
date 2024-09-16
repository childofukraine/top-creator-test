import { MongoClient, Db } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const client: MongoClient = new MongoClient(process.env.DB_URI!)

export const connectDB = async (): Promise<Db> => {
    await client.connect()
    console.log('Connected to MongoDB')

    return client.db()
}
