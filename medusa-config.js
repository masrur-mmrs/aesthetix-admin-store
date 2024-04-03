const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
    case "production":
        ENV_FILE_NAME = ".env.production";
        break;
    case "staging":
        ENV_FILE_NAME = ".env.staging";
        break;
    case "test":
        ENV_FILE_NAME = ".env.test";
        break;
    case "development":
    default:
        ENV_FILE_NAME = ".env";
        break;
}

try {
    dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming Medusa from admin
const ADMIN_CORS =
    process.env.ADMIN_CORS || "http://localhost:7000,http://localhost:7001";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS;
// || "http://localhost:8000";

const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://localhost/medusa-starter-default";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const BACKEND_URL = process.env.BACKEND_URL


const WORKER_MODE = process.env.MEDUSA_WORKER_MODE

const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

const plugins = [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    {
        resolve: `medusa-payment-stripe`,
        options: {
            api_key: STRIPE_API_KEY,
            webhook_secret: STRIPE_WEBHOOK_SECRET,
        }
    },
    {
        resolve: `medusa-file-s3`,
        options: {
            s3_url: process.env.S3_URL,
            bucket: process.env.S3_BUCKET,
            region: process.env.S3_REGION,
            access_key_id: process.env.S3_ACCESS_KEY_ID,
            secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
        },
    },
    {
        resolve: "@medusajs/admin",
        /** @type {import('@medusajs/admin').PluginOptions} */
        options: {
            autoRebuild: false,
        }
    },
    {
        resolve: `medusa-plugin-algolia`,
        options: {
            applicationId: process.env.ALGOLIA_APP_ID,
            adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY,
            settings: {
                indexName: {
                    indexSettings: {
                        searchableAttributes: ["title", "description"],
                        attributesToRetrieve: [
                            "id",
                            "title",
                            "description",
                            "handle",
                            "thumbnail",
                            // "variants",
                            // "variant_sku",
                            "options",
                            "collection_title",
                            "collection_handle",
                            "images",
                        ],

                    },
                    transformer: (product) => ({
                        objectID: product.id,
                        // other attributes...
                    }),
                },
            },
        },
    },
    {
        resolve: `medusa-plugin-sendgrid`,
        options: {
            api_key: process.env.SENDGRID_API_KEY,
            from: process.env.SENDGRID_FROM,
            order_placed_template: process.env.SENDGRID_ORDER_PLACED_ID,
        },
    },
];

/** @type {import('@medusajs/medusa').ConfigModule["featureFlags"]} */
const featureFlags = {
    product_categories: true,
    order_editing: true,
};

/** @type {import('@medusajs/medusa').ConfigModule["modules"]} */
const modules = {
    cacheService: {
        resolve: "@medusajs/cache-redis",
        options: {
            redisUrl: process.env.CACHE_REDIS_URL,
            ttl: 60 * 60,
        }
    },
    eventBus: {
        resolve: "@medusajs/event-bus-redis",
        options: {
            redisUrl: process.env.EVENTS_REDIS_URL,
        },
    },
};


/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
    store_cors: STORE_CORS,
    database_url: DATABASE_URL,
    admin_cors: ADMIN_CORS,
    jobs_batch_size: 100,
    worker_mode: WORKER_MODE,
    // Uncomment the following lines to enable REDIS
    redis_url: REDIS_URL,
    http_compression: {
        enabled: true,
        level: 6,
        memLevel: 8,
        threshold: 1024,
    },
    database_extra: process.env.NODE_ENV !== "development" ? {
        ssl: {
            rejectUnauthorized: false,
        },
    } : {},
};

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
    projectConfig,
    plugins,
    modules,
    featureFlags,
};