var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", res =>{
            cb(res);
        });
    },

    add: function(burgerName, cb){
        orm.insertOne("burgers", burgerName, res =>{
            cb(res);
        });
    },

    update: function(id, cb){
       orm.updateOne("burgers", id, res =>{
           cb(res);
       });
    },

    clear: function(cb){
        orm.delete("burgers", res =>{
            cb(res);
        });
    }
};


module.exports = burger;