const { DataSource } = require("typeorm")

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    entities: [
        "dist/models/*.js",
    ],
    migrations: [
        "dist/migrations/*.js",
    ],
})

module.exports = {
    datasource: AppDataSource,
}