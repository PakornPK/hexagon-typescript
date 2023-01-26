import { FastifyInstance } from "fastify";
import { DataSource } from "typeorm";
import { HelperHandler } from "../handler/helper_handler";
import { PermissionRouter } from "./permission";

export class Router {
    private db: DataSource
    private server: FastifyInstance
    constructor(db: DataSource, server: FastifyInstance) {
        this.db = db
        this.server = server
    }

    public initRouter() {
        const helperHandler = new HelperHandler()
        this.server.get("/health", helperHandler.HealthCheck)

        const p = new PermissionRouter(this.db, this.server)
        p.initPermission()
    }
}