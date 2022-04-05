import connection from "./database/db"
import getPosts from "./controllers/posts"

const getPostsGraphql = async () => {
    const sql = `select * from User;`
    connection.query(sql, (error: any, results: any) => {
        if(error) {
            return "Error";
        } else if(results.length > 0) {
            return results;
        } else{
            return "No results for this query";
        }
    })
};

var users = getPosts;
export const resolver = {
    users: async (context: any) => {
        return await users
    }
};