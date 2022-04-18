export default async function(fastify, opts) {
    fastify.get("/",async (request, reply) => {
        reply.code(200).send("From /test")
    })
}