const mysql = require('mysql')

const config = require('../config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let connection

function handleCon() {
    connection = mysql.createConnection(dbconfig)

    connection.connect((err) => {

        if (err) {
            console.error('[db err]', err)
        } else {
            console.log('DB Connected !')
        }

    })

    connection.on('error', err => {
        console.error('[db err]', err)
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon()
        }else {
            throw err
        }
    }) 
}

handleCon()

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

function get(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id = '${id}'`, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data , (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id] , (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

function upsert(table, data, isNew){
    if(data && isNew){
        return insert(table, data);
    }else{
        return update(table, data);
    }
}

function query(table, query, join) {
    console.log(`query`, query)
    let joinQuery = ''
    if (join) {
        const key = Object.keys(join)[0]
        const val = join[key]
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`
    }


    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ?`, query, (err, result) => {
            if (err) return reject(err)
            const output = {
                ...result
              }
            resolve(output || null); 
        })
    })
}

module.exports = {
    list,
    get,
    insert,
    upsert,
    query
}