// inline caching
// Engine just assumes that findUser(userData) equals "found Jhonson Junior"

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Jhonson',
    lastName: 'Junior'
}

findUser(userData)
findUser(userData)
findUser(userData)
findUser(userData)
findUser(userData)
findUser(userData)
findUser(userData)
