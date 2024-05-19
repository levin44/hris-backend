const pool = require("../config/database");

module.exports={
    create: (data,callBack)=>{
        pool.query(
            `insert into login (username, password, role) values(?,?,?)`,
            [
                data.username,
                data.password,
                data.role
            ],
            (error, results, fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            })

    },

    getUsers: callBack => {
        pool.query(
            `select username, password, role from login`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUserById: (id, callBack) => {
        pool.query(
            `select username, password, role from login where username = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    updateUser: (data, callBack) =>{
        pool.query(
            `update login set password=?, role=? where username=?`,
            [
                data.password,
                data.role,
                data.username
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from login where username = ?`,
            [data.username],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    }
}