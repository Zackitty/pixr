const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const name =
  check('name')
    .not().isEmpty()
    .withMessage('Please provide a player name');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');


router.post('/', email, password, name, asyncHandler(async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const user = await UserRepository.create(req.body);
  
  const { jti, token } = generateToken(user);
  user.tokenId = jti;
  await user.save();
  res.json({ token, user: user.toSafeObject() });
}));

router.get('/me', authenticated, function(req, res) {
  res.json({
    email: req.player.email,
    name: req.player.name,
  });
});

router.post(
  "/",
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username"),
  asyncHandler(async (req, res) => {
    const {
    name,
      email,
      password,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
     name, 
      email,
      hashedPassword,
    });
    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

router.post(
  "/token",
  [
    check("email")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a valid username or email."),
    check("password")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a password."),
  ],
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: email }, { userName: email }]
      },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
  })
);

const userNotFoundError = (id) => {
  const err = Error("User not found");
  err.errors = [`User with id of ${id} could not be found.`];
  err.title = "User not found.";
  err.status = 404;
  return err;
};

const userIsFound = (type) => {
  const err = Error('User found')
  err.errors = [`The following ${type} has already been taken.`];
  err.title = "User found";
  return err;
}


router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id, { attributes: ['id', 'firstName', 'lastName', 'userName', 'email', 'bio', 'profilePicPath', 'age', 'gender'] });
    if (user) {
      res.json({ user });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);

    if (user) {
      if (req.user.id != user.id) {
        //KDEV change to req.user.id
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this user.";
        err.title = "Unauthorized";
        throw err;
      }
      await user.destroy();
      res.json({ message: `Deleted user with id of ${req.params.id}.` });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);




module.exports = router;
