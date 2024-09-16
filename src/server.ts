import express from 'express'
import { Collection, Db } from 'mongodb'
import { connectDB } from './database/db'
import { generateCustomers } from './helpers/generateCustomers'
import { Customer } from './interfaces/customer'
import { watchCustomers } from './helpers/watchCustomers'

const start = async (): Promise<void> => {
    const app = express()
    const db: Db = await connectDB()
    const customersCollection: Collection<Customer> =
        db.collection<Customer>('customers')

    generateCustomers(customersCollection)
    watchCustomers(db)

    app.listen(3000, () => {
        console.log('Server running on port 3000')
    })
}

start()
