const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => 
        dataSources.usersAPI.getUsers(),
        user: (root, {id}, {dataSources}) =>
        dataSources.usersAPI.getUserById(id)

    },

    Mutation: {
        adcionaUser: (root, user, { dataSources }) =>
        dataSources.usersAPI.adcionaUser(user),
        atualizaUser: (root, novosDados, { dataSources }) =>
        dataSources.usersAPI.dataSources.atualizaUser(novosDados),
        deletaUser: (root, { id }, { dataSources }) =>
        dataSources.usersAPI.deletaUser(id)
    }
    

}


module.exports = userResolvers 