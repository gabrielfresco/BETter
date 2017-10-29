const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = mongoose.createConnection('mongodb://localhost/better'); 
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          let err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            let error = new Error("crendenciales incorrectas");
            error.message = "Usuario o contraseña incorrecto";
            return callback(error, null);
          }
        })
      });
}

const User = conn.model('User', UserSchema);
module.exports = User;