var csrf = require('csurf');
var express = require('express');
/*some code here*/
var app = express();
/*some code here*/
app.use(csrf());

app.get('/', function(req, res, next){
  res.render('login', {
    _csrfToken: req.csrfToken()
  });
});

// app.use(function (req, res, next) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     next();
// });

app.listen(3000);