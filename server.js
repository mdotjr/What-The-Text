var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Use 'public' directory for html files
app.use(express.static("public"));

var indexRoutes = require('./controllers/index-routes.js');
app.use(indexRoutes);

var userhomeRoutes = require('./controllers/userhome-routes.js');
app.use(userhomeRoutes);

// require("./controllers/index-routes.js")(app);
// require("./controllers/userhome-routes.js")(app);

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT)
})
