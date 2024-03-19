const { DataSource } = require("typeorm")

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    port: 5432,
    username: "default",
    password: "p4ZhIEow3HDt",
    host: "ep-proud-wave-a43g4k4h-pooler.us-east-1.aws.neon.tech",
    database: "verceldb",
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