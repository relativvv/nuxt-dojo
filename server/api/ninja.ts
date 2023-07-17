export default defineEventHandler(async (event) => {
 
    // QUERY
    const { name } = getQuery(event);

    // POST
    const { age } = await readBody(event);

    return {
        message: `Hello, ${name} - you are ${age} years old!`
    }
})