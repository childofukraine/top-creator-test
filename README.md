## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the root of the project and set your MongoDB connection string:

```
DB_URI=mongodb://<your-mongo-uri>
```

## Running the Application

Start the service:

```bash
npm run start
```

The service will begin generating random customer data and adding it to the `customers` collection. It will then monitor for any changes in this collection, anonymize sensitive data, and store anonymized versions of the documents in the `customers_anonymised` collection.

## Anonymization Process

The following fields are anonymized:

- `firstName`: Replaced with a random 8-character string.
- `lastName`: Replaced with a random 8-character string.
- `email`: The part before `@` is replaced with a random 8-character string.
- `address.line1`, `address.line2`, `address.postcode`: Replaced with random 8-character strings.

The rest of the fields (`city`, `state`, `country`) remain unchanged.

## Technologies

- **Node.js**: Backend framework.
- **Express.js**: Web framework for handling HTTP requests.
- **TypeScript**: For static typing and better developer experience.
- **MongoDB**: NoSQL database for storing customer data.
- **Faker.js**: Library for generating random data for testing.
- **dotenv**: Loads environment variables from a `.env` file.

## Prettier

Code formatting is enforced using Prettier. You can format your code by running:

```bash
npm run format
```