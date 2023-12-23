import { body, validationResult } from 'express-validator';

const registrationValidator = [
  // Validate name
  body('name')
    .notEmpty()
    .withMessage('Name is required'),

  // Validate email
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  // Validate password
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  // Validate confirmPassword
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.validationErrors = errors.array();
    }
    // If validation passes, call the next middleware
    next();
  },
];

export default registrationValidator;
