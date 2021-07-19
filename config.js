module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
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
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-14997.c245.us-east-1-3.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '14997',
        password: process.env.REDIS_PASS || 'VcxSDx5qbAmylH6EdtgO9xdvcJ7mzXD4',
    }
    
}