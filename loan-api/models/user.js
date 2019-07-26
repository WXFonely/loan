const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
  },
  password: {
    type: String,
  }
})
// UserSchema.pre('save', function (next) {
//   var user = this;
//   if (this.isModified('password') || this.isNew) {
//       bcrypt.genSalt(10, function (err, salt) {
//           if (err) {
//               return next(err);
//           }
//           bcrypt.hash(user.password, salt, function (err, hash) {
//               if (err) {
//                   return next(err);
//               }
//               user.password = hash;
//               next();
//           });
//       });
//   } else {
//       return next();
//   }
// });
// // 校验用户输入密码是否正确
// UserSchema.methods.comparePassword = function(passw, cb) {
//   bcrypt.compare(passw, this.password, (err, isMatch) => {
//       if (err) {
//           return cb(err);
//       }
//       cb(null, isMatch);
//   });
// };
const User = mongoose.model('user', userSchema);

module.exports = User;