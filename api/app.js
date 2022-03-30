var express = require('express');
const mysqlconfig = require('./database/db')
var { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/route');
const port = 4000
const app = express();
const schema = buildSchema(`
  type User {
    id: Int
    email: String
    password: String
  }
  type Query {
    users: [User]
    user(id: Int): User
  }
  type Mutation{
    addUser(email: String, password: String): User
  }
`);
var users = [];
var counter=1;

const getUsers = () => {
    var sql = `select * from User;`
    mysqlconfig.query(sql, (error, results) => {
        if(error) {
             return "ubounerror"
        } else if(results.length > 0) {
            return results;
        } else{
            return "Noaicrac"
        }
    })
}

console.log(getUsers);

var users = getUsers();
// Función para resolver las peticiones
var root = {
  users: () => { return users; },

  user: ( data ) => { 
	for ( var i=0; i<users.length; i++ ) 
		if ( users[i].id==data.id ) 
			return users[i]; 

	return null; 
	},

  addUser: ( data ) => { 
	var c={ 'id': counter, 'email':data.email, 'password':data.password }; 
	users.push( c ); 
	counter++; 
	return c; 
	},
};

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Now browse to localhost:4000/graphql');  
})