/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @module              index.js
 * @description         Configuration file for companyXEmployeeRegistration service.
 * @kind                Configuration
 * @copyright           2019
 */


/**
 * @name            - Config files
 * @description     - Describe multiple configuration values.
 */
module.exports = {
    MODE                            : process.env.MODE,
    HTTP_PORT                       : process.env.HTTP_PORT,
    MONGODB_URL                     : process.env.MONGODB_URL,
    ELEMENT_IN_PAGE                 : Number(process.env.ELEMENT_IN_PAGE),
    COLLECTION_RETURN_SIZE          : Number(process.env.COLLECTION_RETURN_SIZE),
    REVERSE_PROXY                   : process.env.REVERSE_PROXY,
    ELASTIC_SEARCH_URL              : process.env.ELASTIC_SEARCH_URL,
    LOG_STASH_PORT                  : process.env.LOG_STASH_PORT,
    SERVICE_ID                      : process.env.SERVICE_ID,
};
