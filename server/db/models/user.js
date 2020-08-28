const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  Bill = require('./bill');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid.');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('password cannot be password.');
        }
        if (value.length < 6) {
          throw new Error('password must be at least 6 characters long.');
        }
      }
    },
    payment: [
      {
        creditCard: {
          type: String,
          minlength: 16,
          maxlength: 16
        },
        ccv: { type: String, minlength: 3, maxlength: 3 },
        expiration: { type: Date },
        zipCode: { type: String, minlength: 5, maxlength: 5 }
      }
    ],

    billHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bill' }],
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: String
  },
  {
    timestamps: true
  }
);

userSchema.virtual('bill', {
  ref: Bill,
  localField: '_id',
  foreignField: 'party'
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject.payment;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Unable to log in.');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login.');
  return user;
};

// This mongoose middleware will hash our user's passwords whenever a user is created or a user password is updated.
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
