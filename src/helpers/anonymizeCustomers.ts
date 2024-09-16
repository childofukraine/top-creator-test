import { faker } from '@faker-js/faker'
import { Customer } from 'src/interfaces/customer'

function generateRandomString(length = 8): string {
    return faker.string.alphanumeric(length)
}

export function anonymizeCustomer(customer: Customer): Customer {
    return {
        ...customer,
        firstName: generateRandomString(),
        lastName: generateRandomString(),
        email: `${generateRandomString()}@${faker.internet.domainName()}`,
        address: {
            ...customer.address,
            line1: generateRandomString(),
            line2: generateRandomString(),
            postcode: generateRandomString(),
        },
    }
}
