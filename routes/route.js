export default async function(fastify, opts) {
   // const genres = fastify.music();
    fastify.get("/rao",async (request, reply) => {
     reply.code(200).send("All Ok")
        //return genres
    })
}