const rateLimit = require('express-rate-limit');
const {CONVERTHOURSTOMILLISECONDS} = require('../utils');

const maximumAllowedHour = 1;
const allowedTimePeriodInMilliSeconds = maximumAllowedHour * CONVERTHOURSTOMILLISECONDS;

const maxAllowedRequestsPerIP = 100;

const limiter = rateLimit({
   max: maxAllowedRequestsPerIP,
   windowMs: allowedTimePeriodInMilliSeconds,
   message: 'Too many requests have been sent from this IP. Kindly try again in an hour.'
});

module.exports = limiter;