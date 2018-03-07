const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const https = require('https')
const request = require('request')
const bodyParser = require('body-parser');
const logger = require('morgan');
const favicon = require( 'serve-favicon');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
var cors = require('cors')
var LDAP = require('./LDAP')

/*==================================
=            Middleware            =
==================================*/
// app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// serve static files, this is for frontend React
app.use('/static', express.static(path.join(__dirname, 'public', 'static')));

/*=====  End of Middleware  ======*/

/*===========================
=            COR            =
===========================*/

app.use(require('cors')());

/*=====  End of COR  ======*/

app.get('/api/hello', (req, res) => {
  console.log('hit')
  res.send({ express: 'Hello From Express' });
});

app.post('/api/login',function(req,res){
  // let mileage = ''
  console.log(1,req.body)
  // let myRequest = JSON.parse(req.body)
  request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
    console.log(JSON.parse(body).rows[0].elements[0].distance.text)
    // req.body.mileage = JSON.parse(body).rows[0].elements[0].distance.text
  })

  console.log('req')
  // req.body.mileage = mileage
  var user_name=req.body.user;
  var password=req.body.password;
  req.body.mileage
  console.log("req.body"+JSON.stringify(req.body)+"User name = "+user_name+", password is "+password, "req.body.mileage ="+ req.body.mileage);
  res.end(JSON.stringify(req.body));
  // res.end(JSON.stringify(myRequest));
});


// app.get('/api/getMileage', function(req, res){ 
//   let mileage = ''
//     request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
//           console.log('error:', error); // Print the error if one occurred and handle it
//           console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
//           console.log('body:',body); // Print the response status code if a response was received
//           mileage = JSON.parse(body).rows[0].elements[0].distance.text
//           res.send(JSON.stringify(mileage))
//         });
//         // console.log(.body.rows)
//     })
app.post('/api/getMileage', function(req, res){ 
  console.log("---",req)
  let mileage = ''
      request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
    // request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+req.body.originLocation+'&destinations='+req.body.destinationLocation+'&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
          console.log('body:',body); // Print the response status code if a response was received
          mileage = JSON.parse(body).rows[0].elements[0].distance.text

          res.end(JSON.stringify(mileage))
        });
        // console.log(.body.rows)
    })

    app.post('/api/getMileage2', function(req, res){ 
      let originLocation = req.body.originLocation.replace(/ /g,"+");
      let destinationLocation = req.body.destinationLocation.replace(/ /g,"+");

          // request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
          request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+originLocation+'&destinations='+destinationLocation+'&key=AIzaSyBfsDywzPknQNZLSXZukknAsrkNhaxlbnI', function (error, response, body) {
              res.end(JSON.parse(body).rows[0].elements[0].distance.text)
            });
        })



app.get('/:ntid/getinfo', function (req, res, next) {
  var auth = new LDAP()
  auth.getInfo(req.params.ntid).then(
    (info) => {
      res.json(info)
    },
    (error) => {
      console.error(error)
      res.status(401).end()
    }
  )
})


app.listen(port, () => console.log(`Listening on port ${port}`));