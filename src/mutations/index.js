const graphql = require('graphql');
const {
    GraphQLObjectType,
} = graphql;
const clienteMutation = require('./clienteMutation');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateEmpresa: clienteMutation.updateEmpresa,
    }
});

module.exports = Mutation;