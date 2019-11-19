/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @module              index.js
 * @description         Index file for helper libraries
 * @kind                Lib
 * @copyright           2019
 */


let
    api  = require('./api'),
    controllerHelper = require('./others/controllerHelper');

/**
 * @name            - Index
 * @description     - Index for helper libraries
 * @type {}
 */
module.exports = {
    api                 : api,
    controllerHelper    : controllerHelper
};