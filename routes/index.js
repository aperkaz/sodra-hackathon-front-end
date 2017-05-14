var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {



    request('http://localhost:4567/randomProperty', function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body.area);// Print the HTML for the Google homepage.
        console.log(JSON.parse(body));
        var data = JSON.parse(body);
        var creature = 'images/'+ data.soil_quality + '.gif';
        res.render('index', { title: 'Express', area: data.area, visit_count: data.visit_count, name: data.name, drone: data.last_drone_inspection,
        soil: data.soil_quality, tree_height: data.avg_tree_height, creature: creature});
    });
    //res.render('index', { title: 'Express' });

});

module.exports = router;
