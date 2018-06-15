var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const exphbs = require('express-handlebars')

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Use 'public' directory for html files
app.use(express.static("public"));

var routes = require('./controllers/routes.js');
app.use(routes);

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT)
})
