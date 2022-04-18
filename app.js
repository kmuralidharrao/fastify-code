import "dotenv/config";
import Fastify from "fastify";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import AutoLoad from "fastify-autoload";

const fastify = Fastify();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// fastify.register(import("./plugins/index.js"));

fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
});

// Single file register
/* 
    import route from "./routes/route.js";
    fastify.register(route)
  */

// fastify.get("/", async (request, reply) => {
//   return "Hello World";
// });

fastify.listen(PORT, () => {
  console.log("Running on port : ", PORT);
});
