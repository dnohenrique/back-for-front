const graphql = require('graphql');
const {
  GraphQLSchema,
} = graphql;
const rootQuery  = require('../queries/index');
const rootMutation = require('../mutations/index');

const rootSchema =  new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});

module.exports = {
  rootSchema
};