const { GraphQLObjectType } = require('graphql')
//const baconQueries = require('../model/bacon/queries')
const roleQueries = require('../model/role/queries');
const postQueries = require('../model/post/queries');
module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        role: roleQueries.role,
        roles: roleQueries.roles,
        getArmyWin: postQueries.getArmyWin,
        getPost: postQueries.getPost,
        search: postQueries.search
    }
})