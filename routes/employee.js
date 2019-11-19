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

router.post('/create'     , controller.create);

router.get('/'      , controller.find);

router.put('/update'      , controller.update);
  
router.delete('/delete'   , controller.remove);

module.exports = router;
