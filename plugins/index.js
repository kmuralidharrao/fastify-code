import fp from "fastify-plugin";
import faker from "faker"

const genres = [{id:1,genre:"thriller"}, {id:2,genre:"pop"}, {id:3,genre:"anthem"}]

console.log(genres);

const plugin = fp(async function plugin(fastify, opts, done) {
    fastify.decorate("music", val => {
        if(val) {
            genres.push({id: genres.length, genre: val})
        }
        return genres;
    });
});

export default plugin;