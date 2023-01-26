
import fastify from 'fastify'
import * as _ from "lodash";
import { logs } from "./logs/logs";
import { Router } from "./route/router";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { load } from 'ts-dotenv';
import { DatabaseConfig } from './database/psql';
import { DataSource } from 'typeorm';

const main = async () => {
    const config = loadConfig()
    if (_.isNil(config)) {
        logs.error("can not load config")
        process.exit(1)
    }
    initTimezone()
    const server = fastify()
    const PostgresDataSource = new DataSource({
        type: "postgres",
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT,
        username: config.DATABASE_USERNAME,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME,
    })

    const db = new DatabaseConfig(PostgresDataSource, config.APP_ENVIRONMENT)
    const err = await db.initDb()
    if (!_.isNil(err)) {
        logs.error("can not connect database")
        process.exit(1)
    }
    const router = new Router(PostgresDataSource, server)
    router.initRouter()

    server.listen({ host: "0.0.0.0", port: config.APP_PORT }, (err, address) => {
        if (err) {
            logs.error(err)
            process.exit(1)
        }
        logs.info(`Server listening at ${address}`)
    })
}

const initTimezone = () => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.tz.setDefault("Asia/Bangkok")
}

const loadConfig = () => {
    return load({
        APP_PORT: Number,
        APP_ENVIRONMENT: String,
        DATABASE_HOST: String,
        DATABASE_PORT: Number,
        DATABASE_NAME: String,
        DATABASE_USERNAME: String,
        DATABASE_PASSWORD: String
    });
}

main();
