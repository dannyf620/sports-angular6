# mover devDependencies a dependencies
> cli
> typescript

# creamos el servidor de aplicación con nodejs 
`server.js`

```javascript

var express  = require('express');
var app      = express();                               
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
 
const path = require('path');
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('sport-angular6'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

```

# Necestamos los siguientes modulos 

- express
- morgan
- body-parser
- cors
- path

`ng build -prod`
```javascript
app.get('/*', function(req,res) {    
res.sendFile(path.join(__dirname+'/dist/sport-angular6/index.html'));
});
```
