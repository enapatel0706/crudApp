
const{check}=require("express-validator")
exports.form=[
  // first Name validation
  check('name').trim().notEmpty().withMessage('First Name required')
  .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),
  //email
  check('emailAddress').notEmpty().withMessage('Email Address required').normalizeEmail().isEmail().withMessage('must be a valid email'),
]


