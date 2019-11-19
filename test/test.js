/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @description         Test for companyXEmployeeRegistration service.
 * @kind                Test
 * @copyright           2019
 */

let
    request     = require('supertest'),
    mongoose    = require('mongoose'),
    objectId    = mongoose.Types.ObjectId,
    expect      = require('chai').expect,

    app         = require('../app'),
    constants   = require('../lib/constant'),
    url         = require('./url_generator'),
    errorCodes  = constants.errorCodes,
    dummyData   = require('./dummy_data');

/**
 * @name                - Send request
 * @description         - Abstracts test requests.
 * @param urlPath       - Url path
 * @param method        - Method
 * @param body          - Body if any
 * @param expectCode    - Code to expect
 * @param callback      - Callback function (error,response)
 */
function sendRequest(urlPath,method,body,expectCode,callback) {
    request(app)[method](urlPath)
        .send(body)
        .expect(expectCode)
        .end(callback);
}

/**
 * @name                - Is error response
 * @description         - Checks if body is an error response.
 * @param body          - Body to check.
 */
function isErrorResponse(body){
    expect(body).to.be.an('object').that.includes.all.keys('errorCode','errorName','errorMessage','hint');
    expect(body.errorCode,body.errorName,body.errorMessage,body.hint).to.be.a('string');
}

/**
 * @name                - Is paginated response
 * @description         - Checks if body is paginated response
 * @param body          - Body to check.
 */
function isPaginatedResponse(body){
    expect(body).to.be.an('object').that.has.all.keys('docs','total','limit','page','pages');
    expect(body.docs).to.be.an('array');
    expect(body.total,body.limit,body.page,body.pages).to.be.a('number');
}

/**
 * @name                - Is update response
 * @description         - Evaluates if body is update response
 * @param body          - Body to evaluate
 */
function isUpdateResponse(body) {
    expect(body).to.be.an('object').that.has.all.keys('n', 'nModified', 'ok');
}

/**
 * @name                - Is update response
 * @description         - Evaluates if body is update response
 * @param body          - Body to evaluate
 */
function isRemoveResponse(body) {
    expect(body).to.be.an('object').that.has.all.keys('n', 'ok');
}

// Begin inserting test validation here
    
        describe("employee",function () {
        
            /**
             * @name            - is__modelName__Public
             * @param body      - Body to evaluate
             * @param private   - If true then body will be evaluate it's private fields as well
             * @description     - Validates if the provided data is __modelName__ public data
             */
             function isemployee(body, private = false) {
                 if(private) {
// Begin body expected evaluation here for model : employee (private)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'email');
    expect(body.name,body.email).to.be.a('String');
    expect(body.age).to.be.a('Number');
// End body expected evaluation here for model : employee (private)
                 }else{
// Begin body expected evaluation here for model : employee (public)
    expect(body).to.be.an('object').that.has.all.keys('__v', '_id', 'firstModified', 'lastModified', 'name', 'age', 'email');
    expect(body.name,body.email).to.be.a('String');
    expect(body.age).to.be.a('Number');
// End body expected evaluation here for model : employee (public)
                 }
        
                expect(new Date(body.lastModified),new Date(body.firstModified)).to.be.an.instanceOf(Date);
                expect(new objectId(body._id)).to.be.an.instanceOf(objectId);
            }
            
            describe("Create" ,function () {
                
                this.timeout(10000);
                it("Should successfully create employee" ,function (done) {
                    sendRequest(url.employee.create(),'post',dummyData.employee.create.success,201,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isemployee(body, true);
                        dummyData.employee.get.success = body;
                        done();
                    });
                });
               
            });
        
            describe("Find" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve employee data (public)" ,function (done) {
                    sendRequest(url.employee.findByIdPublic(dummyData.employee.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.employee.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should successfully retrieve employee data (private)" ,function (done) {
                    sendRequest(url.employee.findByIdPrivate(dummyData.employee.get.success._id),'get',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        expect(body._id).to.equal(dummyData.employee.get.success._id);
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to retrieve employee data ( Id wrong format )" ,function (done) {
                    sendRequest(url.employee.findByIdPublic(dummyData.employee.get.wrongIdFormat),'get',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.QUERY_ERROR.errorCode); 
                        done();
                    });
                });
            });
        
            describe("Find paginated" ,function () {
            
                this.timeout(10000);
                it("Should successfully retrieve employee paginated data" ,function (done) {
                    let validQuery = '__validQuery__';
                    sendRequest(url.employee.findPaginated(validQuery),'get',null,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isPaginatedResponse(body); 
                        done();
                    });
                });
            });
        
            describe("Update" ,function () {
            
                this.timeout(10000);
                it("Should successfully update employee data" ,function (done) {
                    
                    let query = `_id=${dummyData.employee.get.success._id}`;
                    sendRequest(url.employee.update(query),'put',dummyData.employee.update.success,200,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isUpdateResponse(body); 
                        expect(body.nModified).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail to update employee data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.employee.update(query),'put',dummyData.employee.update.success,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                    });
                });
        
                this.timeout(10000);
                it("Should fail to update employee data (Invalid update data)",function (done) {
                    let query = `_id=${dummyData.employee.get.success._id}`;
                    sendRequest(url.employee.update(query),'put',dummyData.employee.update.invalidData,400,function (err,res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        expect(body.errorCode).to.equal(errorCodes.SEC.IMPROPER_DATA.errorCode);
                        done();
                    });
                });
            });
        
            describe("Remove" ,function () {
            
                this.timeout(10000);
                it("Should successfully remove employee data" ,function (done) {
                    let query = `_id=${dummyData.employee.get.success._id}`;
                    sendRequest(url.employee.remove(query),'del',null,200,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isRemoveResponse(body); 
                        expect(body.n).to.be.at.least(1); 
                        done();
                    });
                });
                
                this.timeout(10000);
                it("Should fail remove employee data (Query not found)" ,function (done) {
                    let query = '';
                    sendRequest(url.employee.remove(query),'del',null,400,function (err, res) {
                        let body = res.body;
                        expect(err).to.be.null;
                        isErrorResponse(body);
                        done();
                });
            });
            });
        });
    
// End inserting test validation here