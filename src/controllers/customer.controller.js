var fs = require("fs"), json;
const customer = require('../models/customer.model');

//Simple version, without validation or sanitation
exports.getAllCustomers = function (req, res) {
    //console.log('../Data/customer.json');
    //var response = readJsonFileSync('Data/customer.json');
    var response = readJsonFileSync('Data/customer.json').filter(
        function(obj) {
            //alert(obj.CustomerId );
            return obj.CustomerId === 90;
        }
    );

    res.send(response);
};

function readJsonFileSync(filepath, encoding){
    
        if (typeof (encoding) == 'undefined'){
            encoding = 'utf8';
        }
        var file = fs.readFileSync(filepath, encoding);
        return JSON.parse(file);
    }