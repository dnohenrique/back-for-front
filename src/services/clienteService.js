const config = require('../../settings/config');
const axios = require('axios');
const serviceUrl = config.variables.serviceUrlEmpresas;
const helper = require('../helpers/converter');
const querystring = require('querystring');

exports.getEmpresas = async () => {
    let response = {};
    let url = `${serviceUrl}/Empresa`;

    url = helper.applyEncodeURI(url);
    await axios.get(url)
        .then((retorno) => {
            response = retorno;
            if (response.data.result === null || response.data.result[0] === null)
                response.data.result = [];
        })
        .catch((error) => {
            throw new Error(error.response.data);
        });

    return {
        clientes: response.data.result,
        total: response.data.metaDataViewModel.resultSet.total
    };
};

exports.getEmpresasByParametros = async (parameters) => {
    try {
        const url = `${serviceUrl}/Empresa?${querystring.stringify(parameters)}`;
        const response = await axios.get(url);
        return {
            clientes: response.data.result || [],
            total: response.data.metaDataViewModel.resultSet.total
        };
    } catch (error) {
        throw new Error(error.response.data);
    }
};

exports.getEmpresaByDocument = async (documento) => {
    let response = {};
    let url = `${serviceUrl}/Empresa/${documento}`;

    url = helper.applyEncodeURI(url);
    await axios.get(url)
        .then((retorno) => {
            response = retorno;
            if (response.data.result === null || response.data.result[0] === null)
                response.data.result = [];
        })
        .catch((error) => {
            throw new Error(error.response.data);
        });

    return {
        clientes: response.data.result,
        total: response.data.result.length
    };
};

exports.updateEmpresa = async (cnpj, payload) => {
    let responseStatus = '';
    let url = `${serviceUrl}/Empresa/${cnpj}/cobranca`;

    url = helper.applyEncodeURI(url);
    await axios
        .patch(url, payload)
        .then((retorno) => {
            responseStatus = retorno.status;
        })
        .catch((error) => {
            responseStatus = error.response.status;
            throw new Error(error.response.data.result[0].message);
        });

    if (responseStatus === 200) {
        return true;
    }
    return false;
};
