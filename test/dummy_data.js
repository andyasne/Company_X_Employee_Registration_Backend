/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @description         Test for companyXEmployeeRegistration __modelName__ service.
 * @kind                Test
 * @copyright           2019
 */

let
    dummyJSON = require('dummy-json'),
    mongoose = require('mongoose');

const customMock = {
    objectId : new mongoose.Types.ObjectId,
    buffer   : new mongoose.Types.Buffer,
    dates : new Date()
};

/**
 * @name        Dummy data
 * @description     Dummy data for service companyXEmployeeRegistration
 * @type {{create: {success: null, validationError: null}, get: {success: null, wrongIdFormat: string}, update: {success: *, invalidData: {invalidKey: string}}, delete: {success: null, dataNotFound: null}}}
 */
module.exports = {
    // Dummy data for service test begins here
        
                /**
                 * @name            - employee
                 * @description     - Dummy data for employee
                 */
                employee : {
                    create  : {
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "email" : "{{email}}" } ', {mockdata : customMock})),
                        validationError : { invalidKey : 'invalidValue' }
                    },
                    get    : {
                        success         : null,
                        wrongIdFormat   : 'wrongIdFormat'
                    },
                    update  : {  
                        success         : JSON.parse(dummyJSON.parse(' { "name" : "{{firstName}}" , "age" : "{{int 16 99}}" , "email" : "{{email}}" } ', {mockdata : customMock})),
                        invalidData     : { invalidKey : 'invalidValue'},
                    },
                    delete  : {
                        success         : null,
                        dataNotFound    : null
                    }
                },  
            
// Dummy data for service test ends here
};