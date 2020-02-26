const { GraphQLObjectType } = require('graphql')
//const baconMutation = require('../model/bacon/mutations')
const roleMutation = require('../model/role/mutations')
const postMutation = require('../model/post/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    description:"新增與更新",
    fields: {
        addRole: roleMutation.addRole,
        updateRole: roleMutation.updateRole,
        addPost: postMutation.addPost,
        updatePost: postMutation.updatePost
    }
})