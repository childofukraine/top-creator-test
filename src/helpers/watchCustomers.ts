import { Collection, Db } from 'mongodb'
import { Customer } from 'src/interfaces/customer'
import { anonymizeCustomer } from './anonymizeCustomers'

export const watchCustomers = async (db: Db): Promise<void> => {
    const collection: Collection<Customer> = db.collection('customers')
    const anonymizedCollection: Collection<Customer> = db.collection(
        'customers_anonymised',
    )

    const changeStream = collection.watch()

    changeStream.on('change', async (next) => {
        if (
            next.operationType === 'insert' ||
            next.operationType === 'update'
        ) {
            const customer = next.fullDocument as Customer
            const anonymizedCustomer = anonymizeCustomer(customer)
            await anonymizedCollection.replaceOne(
                { _id: customer._id },
                anonymizedCustomer,
                { upsert: true },
            )
            console.log('Customer anonymized')
        }
    })
}
