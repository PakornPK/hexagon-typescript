import { FastifyReply, FastifyRequest } from "fastify";

export class HelperHandler {
    public HealthCheck(request: FastifyRequest, reply: FastifyReply) {
        return reply.status(200).send()
    }
}