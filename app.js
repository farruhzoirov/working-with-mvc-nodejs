const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');
const app = express();

// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extendName: 'handlebars'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

const errorReturner = require('./controllers/error')

const adminDataRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminDataRoutes);
app.use(shopRoutes);

app.use(errorReturner.get404);


app.listen(5000);
