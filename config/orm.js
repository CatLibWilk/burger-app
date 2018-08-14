var connection = require("./connection.js");


var orm = {
    selectAll: function(table, cb){
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, res) =>{
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, burgerName, cb){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES("${burgerName}", false)`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    
    },
    updateOne: function(table, targetId, cb){
        var queryString = `UPDATE burgers SET devoured = true WHERE id = ${targetId}`;
        connection.query(queryString, (err, res) =>{
            if (err) throw err;
            cb(res);
        });
    },

    delete: function(table, cb){
        connection.query("DELETE FROM burgers", (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;