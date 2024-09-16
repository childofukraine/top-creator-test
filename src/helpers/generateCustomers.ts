import { faker } from '@faker-js/faker'
import { Collection } from 'mongodb'
import { Customer } from 'src/interfaces/customer'

export const generateCustomers = (collection: Collection<Customer>): void => {
    setInterval(async () => {
        const customers: Customer[] = Array.from({
            length: Math.floor(Math.random() * 10) + 1,
        }).map(() => ({
            _id: faker.database.mongodbObjectId(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            address: {
                line1: faker.location.streetAddress(),
                line2: faker.location.secondaryAddress(),
                postcode: faker.location.zipCode(),
                city: faker.location.city(),
                state: faker.location.state(),
                country: faker.location.countryCode(),
            },
            createdAt: new Date(),
        }))

        await collection.insertMany(customers)
        console.log('Customers added')
    }, 200)
}
