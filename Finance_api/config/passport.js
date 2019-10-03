import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
import User from '../models/users';

//Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id)
})

//Deserialize user
passport.deserializeUser((id, done) => { User.findById(id, (err, user) => { done(err, user) }) });

//Local Strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect Username' });
      user.comparePassword(password, (err, isMatch) => {
          if (isMatch) {
              return done(null, user);
          } else {
              return done(null, false, { message: 'Incorrect password.' });
          }
      })
  })
}))

passport.use(new FacebookStrategy({
        clientID: "484024792328223",
        clientSecret: "49a6b7fc5c4325791695fa7e81dc7986",
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email'],
    }, function (accessToken, refreshToken, profile, done) {
        process.nextTick(() => {
            User.findOne({ email: profile.emails[0].value }, (err, user) => {
                if (err)
                    return done(err);
                if (user)
                    return done(null, user);
                else {
                    let payload = {
                        email: profile.emails[0].value,
                        name: profile.displayName.split(" ").join('-').toLowerCase(),
                    };
                    let newUser = new User(payload);
                    newUser.save((err, user) => {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    })
                }
            });
        });
    }
    ));

module.exports = passport;