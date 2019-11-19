/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @module              url_generator
 * @description         Url generator for companyXEmployeeRegistration
 * @kind                Test
 * @copyright           2019
 */

const baseURL = `/employee`;

// Begin inserting routes url here
    const employeeRoute = `${baseURL}/employee`;
// End inserting routes url here

module.exports = {
    // Begin inserting rest end points for routes here
        
            employee : {
                create          : ()=> `${employeeRoute}`,
                findByIdPublic  : (id)=> `${employeeRoute}/?id=${id}`,
                findByIdPrivate : (id)=> `${employeeRoute}/?id=${id}&private=true`,
                findPaginated   : (query)=> `${employeeRoute}/?${query}`,
                update          : (query)=> `${employeeRoute}/?${query}`,
                remove          : (query)=> `${employeeRoute}/?${query}`
            },
            
// End inserting rest end points for routes here
};