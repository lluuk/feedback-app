# Feedback-app

This is a monorepo containing both frontend and backend applications.

## Structure

- `apps/`
  - `client/` - Frontend application built with Vue 3, Vite, TypeScript and TailwindCSS
  - `backend/` - Backend application built with Express, TypeScript, MongoDB, and Mongoose
- `packages/`
  - `types/` - Shared TypeScript types
  - `validation/` - Shared Zod schemas for validation

## Getting Started

To install all dependencies, run:

```bash
pnpm install
```

## Setting Up MongoDB

### Install MongoDB

To install MongoDB, follow these steps:

#### Option 1

1. Setup MongoDB in Atlas: Follow the instructions [here](https://www.mongodb.com/docs/atlas/getting-started/)

#### Option 2

1. Download MongoDB: Go to the [MongoDB Download Center](https://www.mongodb.com/try/downloadcommunity) and download the version appropriate for your operating system.
2. Install MongoDB: Follow the installation instructions for your operating system:

   - Windows: Follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
   - macOS: Follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).
   - Linux: Follow the instructions [here](https://docs.mongodb.com/manual/administration/install-on-linux/).

3. Start MongoDB

   Once MongoDB is installed, you can start the MongoDB server by running:

   ```bash
   mongod
   ```

4. Create a Database

   By default, MongoDB connects to a database called test. You can create a new database and a collection for your feedback data using the MongoDB shell:

   1. Open the MongoDB shell:

      ```bash
      mongo
      ```

   2. Create a new database:

      ```bash
      use mydatabase
      ```

### Configuration

The api application expects a MongoDB connection string. You can configure the connection string in an environment variable or directly in your code.

#### Environment Variable

Replace a .env.example with .env file in the apps/api directory and add your MongoDB connection string

### Application start

To start application just run command:

```bash
pnpm start
```

After the applications start the server should run on [localhost: 5000](http://localhost:5000) and client on [localhost:5173](https://localhost:517) by default

Additionall useful commands:

```bash
pnpm dev // run all apps and packages in dev mode
pnpm build // build all apps and packages
```
