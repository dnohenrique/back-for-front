const graphql = require('graphql');
const {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = graphql;

const getEmpresasType = require('../types/getEmpresasType').getEmpresasType;
const clienteService = require('../services/clienteService');

const getEmpresas = {
    type: getEmpresasType,
    args: {},
    async resolve() {
        const { clientes, total } = await clienteService.getEmpresas();

        return {
            clientes,
            total
        };
    }
};
const getEmpresasByParametros = {
    type: getEmpresasType,
    args: {
        nomeFantasia: {
            type: GraphQLString,
        },
        razaoSocial: {
            type: GraphQLString,
        },
        empresaProprietariaId: {
            type: GraphQLString,
        },
        centroCusto: {
            type: GraphQLString,
        },
        diaCobrancaInicio: {
            type: GraphQLInt,
        },
        diaCobrancaFim: {
            type: GraphQLInt,
        },
        cobrancaAutomatica: {
            type: GraphQLBoolean,
        },
        limit: {
            type: GraphQLInt,
        },
        offset: {
            type: GraphQLInt,
        }
    },
    async resolve(parent,  args) {
        const { clientes, total } = await clienteService.getEmpresasByParametros(args);

        return {
            clientes,
            total
        };
    }
};

const getEmpresaByDocument = {
    type: getEmpresasType,
    args: {
        documentoEmpresa: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(parent,  args) {
        const { clientes, total } = await clienteService.getEmpresaByDocument(args.documentoEmpresa);

        return {
            clientes,
            total
        };
    }
};

module.exports = {
    getEmpresas,
    getEmpresasByParametros,
    getEmpresaByDocument
};