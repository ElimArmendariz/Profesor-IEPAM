

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


    
