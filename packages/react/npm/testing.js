'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-testing.production.min.js');
} else {
  module.exports = require('./cjs/react-testing.development.js');
}
