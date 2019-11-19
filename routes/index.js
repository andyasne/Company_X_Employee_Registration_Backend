/**
 * @author             Andinet 
 * @name               companyXEmployeeRegistration
 * @description        Route index for companyXEmployeeRegistration
 * @kind               Route
 * @module             Route index
 * @copyright          2019
 */

// Begin route var declaration here
let
    employee = require('./employee');
// End route var declaration here

/**
 * @description     - Defines the first routing mechanism
 * @param app       - The router object
 */
module.exports = function (app) {
// Begin routing definition here
    app.use('/employee/employee', employee);
// End Routing definition here
};
