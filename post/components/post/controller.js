const nanoid = require('nanoid')

const TABLA = 'post'

module.exports = function (injectedStore) {
    let store = injectedStore

    if(!store) {
        store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    async function upsert(body) {
        const post = {
             id: body.id || nanoid.nanoid(),
             text: body.text,
             user: body.user,
        }

        const isNew = body.id === undefined
        return store.upsert(TABLA, post, isNew )
    }

    return {
        list,
        get,
        upsert
    }
}

