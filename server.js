
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override')

let app = express();

app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));


let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


let router = require('./controllers/burgers_controllers.js');
app.use('/', router);

let port = process.env.PORT || 3000;
app.listen(port);