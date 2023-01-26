import { FastifyInstance } from "fastify";
import { DataSource } from "typeorm";
import { PermissionHandler } from "../handler/permission";
import { PermissionRepository } from "../repository/permission";
import { PermissionRepositoryMock } from "../repository/permission.mock";
import { PermissionService } from "../services/permission";



export class PermissionRouter {
    private db: DataSource
    private server: FastifyInstance
    constructor(db: DataSource, server: FastifyInstance){
        this.db = db, 
        this.server = server
    }

    public initPermission() {
        // const pmRepository = new PermissionRepository(this.db)
        const pmRepository = new PermissionRepositoryMock()
        const pmService = new PermissionService(pmRepository)
        const pmHandler = new PermissionHandler(pmService)

        this.server.get('/permission', pmHandler.GetPermissions)
    }
}