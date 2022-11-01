const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInputObjectType
} = graphql;

// emailAlternativo: string,
// cobrancaAutomatica: boolean,
// faturarMesFechado: boolean,
// diaInicial: number,
// diaFinal: number

exports.updateEmpresaType = new GraphQLInputObjectType({
    name: 'updateEmpresaType',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        alias: {
            type: new GraphQLNonNull(GraphQLString)
        },
        emailAlternativo: {
            type: new GraphQLNonNull(GraphQLString)
        },
        cobrancaAutomatica: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        faturarMesFechado: {
            type: new GraphQLNonNull(GraphQLBoolean)
        },
        diaInicial: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        diaFinal: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    })
});