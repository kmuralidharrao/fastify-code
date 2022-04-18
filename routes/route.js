export default async function(fastify, opts) {
    fastify.get("/rao",async (request, reply) => {
        reply.code(200).send("All Ok")
    })
}