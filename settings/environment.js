const env = process.env.NODE_ENV || 'local';

const params = {
    local: {
        serviceUrlEmpresas: 'http://localhost:32304/api',
    },
    development: {
        serviceUrlEmpresas: 'http://microservice-empresas/api',
    },
    staging: {
        serviceUrlEmpresas: 'http://microservice-empresas-staging.platform.ferias.in/api',
    },
    production: {
        serviceUrlEmpresas: 'http://microservice-empresas-production.platform.ferias.in/api',
    }
};

module.exports = params[env];
