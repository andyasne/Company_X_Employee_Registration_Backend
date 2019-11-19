/**
 * @author             Andinet 
 * @name               companyXEmployeeRegistration
 * @description        Manages employee for companyXEmployeeRegistration
 * @kind               Model
 * @module             Defines employee model
 * @copyright          2019
 */

let
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema,
    config              = require('../config'),
    mongoosastic        = require('mongoosastic'),
    debug               = require('debug')('companyXEmployeeRegistration/model/employee'),
    mongoosePaginate    = require('mongoose-paginate');

let employee = new Schema({
    firstName : {type:String,es_indexed:true},
    lastName : {type:String,es_indexed:true},
    age : {type:Number,es_indexed:true},
    photo : {type:String,es_indexed:true},
    employmentDate : {type : Date, es_indexed : true},
    firstModified : {type : Date, es_indexed : true},
    lastModified : {type : Date, es_indexed : true}
});
 
/*
 Adding plugins
 */
employee.plugin(mongoosePaginate);



// Updating time Stamp of first and last modified before initial save
employee.pre('save',function preSave(next) {
    let employeeSchema  = this;
    let now = new Date();

    if(!employeeSchema.firstModified ){  // Saving for the first time
        employeeSchema.firstModified  = now.toISOString();
        employeeSchema.lastModified   = now.toISOString();
        next();
    }else{ // Saving Modified data
        employeeSchema.lastModified   = now.toISOString();
        next();
    }
});

let employeeSchema = mongoose.model('employee', employee);
 

module.exports = employeeSchema;