module.exports = {
    remoteDB: proccess.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000
    },
    
    post: {
        port: process.env.MYSQL_SRV_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql3.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql3424983',
        password: process.env.MYSQL_PASS || 'bwAiawdfVc',
        database: process.env.MYSQL_DB || 'sql3424983',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
}