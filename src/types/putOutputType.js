const graphql = require('graphql');
const {
  GraphQLBoolean,
  GraphQLObjectType
} = graphql;

exports.putOutputType = new GraphQLObjectType({
  name: 'putOutput',
  fields: () => ({
    success: {
      type: GraphQLBoolean
    }
  })
});