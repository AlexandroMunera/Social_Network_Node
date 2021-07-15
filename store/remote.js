const request = require('request')

function createRemoteDB(host, port) {
    const URL = 'http://' + host + ':' + port

    function list(table) {
        return req('GET', table)
    }

    function get(table, id) {
        return req('GET', table + '/' + id)
    }
    
    function upsert(table, data, isNew) {

        if (isNew) {
            return req('POST', table, data)
        }

        return req('PUT', table, data)
    }

    function query(table, query, join) {
        return req('GET', table, query, join)
    }

    function req(method, table, data) {
        let url = URL + '/' + table
        body = JSON.stringify(data) || ''

        return new Promise((resolve, reject) => {
            request({
                    method,
                    headers: {
                        'content-type': 'application/json'
                    },
                    url,
                    body,
                }, (err, res, body) => {
                    if (err) {
                        console.error('Error con la base de datos remota', err)
                        reject(err.message)
                    } 
                    
                    const resp = JSON.parse(body)
                    return resolve(resp.body)                
                }
            )
        })
    }

    return {
        list,
        get,
        upsert,
        query,
    }
}

module.exports = createRemoteDB