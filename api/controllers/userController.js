const mysqlconfig = require('../database/db')


const getUsers = () => {
    var sql = `select * from User;`
    var dblogs;
    mysqlconfig.query(sql, (error, results) => {
        if(error) {
            dblogs = "Error"
        } else if(results.length > 0) {
            dblogs = JSON.stringify(json(results));
        } else{
            dblogs ="No"
        }
    })
    return dblogs;
}

    /*
    async logUser(req , res){
        console.log(req.params.username)
        if(req.params.username != null) {
            let username = req.params.username
            var sql = `CALL SPNewUser(${username})`
            mysqlconfig.query(sql, (error,data,fields) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else {
                    console.log(data)
                    res.json({
                        status: 200,
                        message: "Log uploaded successfully",
                        affectedRows: data.affectedRows
                    })
                }
            })
        } else {
            res.send('Por favor llena todos los datos!')
        }
    }*/


    
