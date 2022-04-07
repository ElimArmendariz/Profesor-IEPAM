import connection from "./database/db"
import controller from './controllers/posts';
import { post } from "./routes/posts";

export const resolver = {
    users: ()  => { 
        var posts = controller.getPosts();
        const time  = new Date()
        console.log("posts "+ posts +" time resolver " + time)
        return posts;        
    }
};