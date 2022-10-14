// config/passport.js
// load all the things we need
const LocalStrategy = require('passport-local').Strategy;

// load up the user model
const mysql = require('mysql');
const bcrypt = require('bcrypt-nodejs');
const dbconfig = require('./database.js');
const connection = mysql.createConnection(dbconfig.connection);
// connection.connect();
// connection.query('USE ' + dbconfig.database);
// connection.end();

// passport session setup 
module.exports = (passport) => {

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
      return done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(async(id, done) => {
    // connection.connect();
    connection.query("SELECT * FROM Users WHERE id = ?", id, function(err, rows) {
      done(err, rows);
    });
    // connection.end();
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'
  passport.use(
    'local-signup', 
    new LocalStrategy(
      { // by default, local strategy useusername and password, we will overridwith email
        usernameField : 'userId',
        passwordField : 'password',
      },
      async (userId, password, done) => {
        // connection.connect();
        connection.query("SELECT * FROM Users WHERE userId = ?", userId, function(err, rows) {
          try {
            if (rows) {
              return done(null, false, { reason: '이미 등록된 회원입니다.' });
            }
            else {
              // if there is no user with that userId
              // create the user
              const newUserMysql = {
                userId : userId,
                password : bcrypt.hashSync(password, null, null) // use the generatheHashfunction in our user model
              };
              const insertQuery = "INSERT INTO Users ( userId, password ) VALUES (?,?)";
              connection.query(insertQuery, [newUserMysql.userId, newUserMysql.password], function(err, rows) {
                newUserMysql.id = rows;
                return done(null, newUserMysql);
              });
              // connection.end();
            }
          } catch (e) {
            console.log(e);
            return done(e);
          }
        })
      })   
  );

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'
  passport.use(
    'local-login', 
    new LocalStrategy(
      { // by default, local strategy useusername and password, we will overridwith email
        usernameField : 'userId',
        passwordField : 'password',
      },
      async (userId, password, done) => {
        // connection.connect();
        connection.query("SELECT * FROM Users WHERE userId = ?", userId, function(err, rows) {
          try {
            if (!rows) {
              return done(null, false, { reason: '존재하지 않는 회원입니다.' });
            }
            if (!bcrypt.compareSync(password, rows.password)) {
              return done(null, false, { reason: '비밀번호가 틀립니다.' });
            }
          } catch (e) {
            console.log(e);
            return done(e);
          }
        })
      })
  )
}