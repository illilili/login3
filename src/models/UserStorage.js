"use strict";

// const static = require("express");

class UserStorage{
    static #users= {    // privte 변수
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    getUsers(...변수명) {
        console.log(변수명);
        return this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static  getUserInfo(id) {
        const users = this.#users;
        const inx = users.id.indexOf(id);
        const usersKeys = Object.keys(user);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return newUser;

    }
}

module.exports = UserStorage;