import { FastifyRequest } from "fastify";
import { FastifyReply } from "fastify/types/reply";
import { IPermissionService } from "../services/Ipermission";

export class PermissionHandler {
    private pmSvr: IPermissionService
    constructor(pmSvr: IPermissionService) {
        this.pmSvr = pmSvr
    }

    public GetPermissions = async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send(await this.pmSvr.GetPermissions())
    }
}