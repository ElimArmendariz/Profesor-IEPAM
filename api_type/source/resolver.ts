import connection from "./database/db"
import controller from './controllers/posts';

var users = controller.getPosts;
export const resolver = {
    users: () => { return users; }
};