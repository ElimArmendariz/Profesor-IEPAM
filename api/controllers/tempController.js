const mysqlconfig = require('../database/db')

class MainController {

    async logTemp(req , res){
        console.log(req.params.deviceId)
        if(req.params.deviceID != null) {
            let deviceID = req.params.deviceID
            var sql = `CALL SPLogSecurity(${deviceID})`
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
    }

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
    }

    async logSensor(req , res){
        console.log(req.params.userID)
        console.log(req.params.description)
        console.log(req.params.location)
        if(req.params.userID != null && req.params.description != null && req.params.location != null) {
            let userID = req.params.userID
            let description = req.params.description
            let location = req.params.location
            var sql = `CALL SPNewSensor(${userID}, ${description}, ${location})`
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
    }

    async getLogs(req , res){
        var sql = `select * from securityLogs;`
        mysqlconfig.query(sql, (error, results) => {
            if(error) {
                res.status(500)
                res.send(error.message)
            } else if(results.length > 0) {
                res.json(results);
            } else{
                res.send('No results for this query')
            }
        })
    }

    async getUsers(req , res){
        var sql = `select * from User;`
        mysqlconfig.query(sql, (error, results) => {
            if(error) {
                res.status(500)
                res.send(error.message)
            } else if(results.length > 0) {
                res.json(results);
            } else{
                res.send('No results for this query')
            }
        })
    }

    async getSensors(req , res){
        var sql = `select * from Sensor;`
        mysqlconfig.query(sql, (error, results) => {
            if(error) {
                res.status(500)
                res.send(error.message)
            } else if(results.length > 0) {
                res.json(results);
            } else{
                res.send('No results for this query')
            }
        })
    }

    async getLogsByUser(req , res){
        console.log(req.params.username)
        if(req.params.username != null) {
            let username = req.params.username
            var sql = `CALL SPGetLogsByUser(${username});`
            mysqlconfig.query(sql, (error, results) => {
                if(error) {
                    res.status(500)
                    res.send(error.message)
                } else if(results.length > 0) {
                    res.json(results);
                } else{
                    res.send('No results for this query')
                }
            })
        }
    }

    
}

const tempController = new MainController()
module.exports = tempController;