# electric-drizzle

An Electron app to showcase the use of the [`drizzle`](https://orm.drizzle.team) library using the [electron-shadcn](https://github.com/LuanRoger/electron-shadcn) template as base.

![Screenshot](https://github.com/LuanRoger/electric-drizzle/blob/main/images/demo.png)

> [!WARNING]
> This project is just for demo purposes, it will not be actively maintained.

## How to run

### Pre-requisites

- Node.js
- NPM
- PostgreSQL instance running

It's recomended to use Docker to run the PostgreSQL instance. You can use the following command to start a PostgreSQL instance:

```bash
docker run --name electric-drizzle-db -p 5432:5432 -d -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin postgres
```

### Steps

1. Clone this repository

2. Install dependencies

```bash
npm install
```

3. Update the database URL:

In the [`db_consts.ts`](https://github.com/LuanRoger/electric-drizzle/blob/main/src/lib/db/db_consts.ts) file, update the `dbUrl` constant with the URL of your PostgreSQL instance.

4. Push the schemas to the database

```bash
npm run db:push
```
5. Run the app

```bash
npm run start
```

## License

This project is under the MIT license. Check the [LICENSE](https://github.com/LuanRoger/electric-drizzle/blob/main/LICENSE) for more information.
