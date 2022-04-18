import 'dotenv/config'
import Fastify from "fastify";

const fastify = Fastify();

const PORT = process.env.PORT || 3000;

// Single file register
/* 
import route from "./routes/route.js";
fastify.register(route)
*/

fastify.get("/", async (request, reply)=>{
    return "Hello World"
});

fastify.listen(PORT,()=>{
    console.log("Running on port : ", PORT)
})