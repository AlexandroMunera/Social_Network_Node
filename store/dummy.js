const db = {
    'user': [
        { id: '1', name: 'Freud'}
    ]
}

async function list(tabla){
    return db[tabla] || []
}

async function get(tabla, id){
    let col = await list(tabla)
    return col.find( item => item.id === id) || null
}

async function upsert(tabla, data){
    if(!db[tabla]){
        db[tabla] = []
    }

    db[tabla].push(data)
}

async function remove(tabla, id){
    console.log(db[tabla].filter( el => el.id !== id ))
    const newListUsers = db[tabla].filter( el => el.id !== id )
    db[tabla] = newListUsers
    return true
}

async function query(tabla, q){
    let col = await list(tabla)
    let keys = Object.keys(q)
    let key = keys[0]

    return col.filter( item => item[key] === q[key])[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}