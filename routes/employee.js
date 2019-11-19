/**
 * @author              Andinet 
 * @name                companyXEmployeeRegistration
 * @module              employee.js
 * @description         Route for employee
 * @kind                Router
 * @copyright           2019
 */

let
    express = require('express'),
    router = express.Router(),
    controller = require('../controller/employee');

/**
 * @api             {post} /employee/employee     Create
 * @apiVersion      0.0.1
 * @apiName         Create
 * @apiGroup        employee
 * @apiDescription  Creates new employee data
 *
 * @apiPermission     All
 *
 *  
 *
 * @apiParamExample Body
 *
    {
    "name": "Florance",
    "age": "35",
    "email": "florance.tindel@fastmart.co"
}
 *  
 *
    * @apiParam    (Body)  {String }    name     - name
    * @apiParam    (Body)  {Number }    age     - age
    * @apiParam    (Body)  {String }    email     - email
    * @apiSuccess      {String}    name     - name
    * @apiSuccess      {Number}    age     - age
    * @apiSuccess      {String}    email     - email
    * @apiSuccess     {String}    __v           - Version
    * @apiSuccess     {String}    _id           - Id
    * @apiSuccess     {String}    firstModified - First modified
    * @apiSuccess     {String}    lastModified  - Last modified
 *  
 *
 * @apiSuccessExample Body
 *
    {
    "name": "Florance",
    "age": "35",
    "email": "florance.tindel@fastmart.co",
    "__v": "14",
    "firstModified": "2019-11-19T07:47:32.050Z",
    "lastModified": "2019-11-19T07:47:32.050Z",
    "_id": "5dd39e1452adf2265077a915"
}
 *  
 *
 * @apiSampleRequest http://localhost:3300/employee/employee
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.post('/'     , controller.create);

/**
 * @api             {get} /employee/employee     Get
 * @apiVersion      0.0.1
 * @apiName         Get
 * @apiGroup        employee
 * @apiDescription  Retrieves employee data
 *
 * @apiPermission     All
 *
 * @apiParam (Query)        {Number}    [page = 1]                          - Page Number
 * @apiParam (Query)        {String}    [sort = id]                         - Sort order by
 * @apiParam (Query)        {Boolean}   [lean = false]                      - Lean
 * @apiParam (Query)        {Number}    [offset = 0]                        - Offset
 * @apiParam (Query)        {Number}    [limit = 12]            - Limit of return
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ email = undefined ]  - String
 *  
 *
 * @apiSuccess              {array}     docs                                - Documents array result
 * @apiSuccess              {Number}    total                               - Total number of retrieved results
 * @apiSuccess              {Number}    limit                               - Limit of a single return
 * @apiSuccess              {Number}    offset                              - Offset
 *
 * @apiSuccessExample Body
 *
 * {
        "docs": [

    {
    "name": "Myong",
    "age": "48",
    "email": "myong.woodrum@viewtopia.name",
    "__v": "87",
    "firstModified": "2019-11-19T07:47:32.055Z",
    "lastModified": "2019-11-19T07:47:32.055Z",
    "_id": "5dd39e1452adf2265077a916"
},
    {
    "name": "Selma",
    "age": "27",
    "email": "selma.stine@duoserve.info",
    "__v": "72",
    "firstModified": "2019-11-19T07:47:32.064Z",
    "lastModified": "2019-11-19T07:47:32.064Z",
    "_id": "5dd39e1452adf2265077a917"
},
    {
    "name": "Elaine",
    "age": "31",
    "email": "elaine.cappel@smartsystems.co",
    "__v": "40",
    "firstModified": "2019-11-19T07:47:32.066Z",
    "lastModified": "2019-11-19T07:47:32.066Z",
    "_id": "5dd39e1452adf2265077a918"
}
            
        ],
        "total": 12,
        "limit": 3,
        "offset": 0
    }
 *
 * @apiSampleRequest http://localhost:3300/employee/employee
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.get('/'      , controller.find);


/**
 * @api             {put} /employee/employee     Update
 * @apiVersion      0.0.1
 * @apiName         Update
 * @apiGroup        employee
 * @apiDescription  Updates new employee data
 *
 * @apiPermission     All
 *
 * @apiParamExample Body
 *
    {
    "name": "Kirstie",
    "age": "71",
    "email": "kirstie.milligan@conixco.biz"
}
 *  
 *
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ email = undefined ]  - String
 *  
 *
 * @apiSuccess              {String}    n                                   - Number of objects manipulated
 * @apiSuccess              {String}    nModified                           - Number of objects modified based on query
 * @apiSuccess              {String}    ok                                  - Number of objects successfully modified
 *
 * @apiSuccessExample Body
 *
 *  {
      "n" : "1",
      "nModified" : "1",
      "ok" : "1"
    }
 *
 *
 * @apiSampleRequest http://localhost:3300/employee/employee
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.put('/'      , controller.update);

/**
 * @api             {delete} /employee/employee     Delete
 * @apiVersion      0.0.1
 * @apiName         Delete
 * @apiGroup        employee
 * @apiDescription  Deletes employee data
 *
 * @apiPermission     All
 *
    * @apiParam (Query)   {String} [ name = undefined ]  - String
    * @apiParam (Query)   {Number} [ age = undefined ]  - Number
    * @apiParam (Query)   {String} [ email = undefined ]  - String
 *  
 *
 * @apiSuccess              {String}    n                                   - Number of objects manipulated
 * @apiSuccess              {String}    ok                                  - Number of objects successfully deleted
 *
 * @apiSuccessExample Body
 *
 *  {
      "n" : "1",
      "ok" : "1"
    }
 *
 * @apiSampleRequest http://localhost:3300/employee/employee
 *
 * @apiError    (400)       {Object}    AUTHENTICATION_NOT_SET              - Authentication values are not set.
 * @apiError    (400)       {Object}    AUTHENTICATION_TYPE_NOT_ACCORD      - Authentication type is not according to constants.
 * @apiError    (400)       {Object}    AUTHENTICATION_VALUE_NOT_SET        - Authentication values are not set.
 * @apiError    (401)       {Object}    UNAUTHORIZED_ACCESS                 - Token is not authorized to access this route..
 * @apiError    (401)       {Object}    TOKEN_REVOKED                       - Token is revoked.
 * @apiError    (401)       {Object}    TOKEN_EXPIRED                       - Token has expired.
 * @apiError    (401)       {Object}    AUTHORIZED_SERVICE_ACCESS_DENIED    - Service has no been granted access.
 *
 * @apiError    (400)       {Object}    CAST_ERROR                          - Possible casting error.
 * @apiError    (400)       {Object}    NO_QUERY_DATA                       - No proper or no query data has been provided.Mainly could be caused by using wrong key in url.
 * @apiError    (400)       {Object}    NO_DATA_FOUND                       - No data found in query.
 */
router.delete('/'   , controller.remove);

module.exports = router;
