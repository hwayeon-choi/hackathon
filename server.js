// server.js
// set up ======================================================================
// get all the tools we need
const express  = require('express');
const session  = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app      = express();
const port     = process.env.PORT || 3000;
const passport = require('passport');

// configuration ===============================================================
// connect to our database

require('./config/passport.js')(passport); // pass passport for configuration

// set up our express application
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('server started on port ' + port);