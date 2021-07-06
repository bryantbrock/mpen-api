"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var JWT_SECRET = process.env.AUTH_JWT_SECRET;

var _default = function _default(req, res, next) {
  var token = req.header('x-auth-token'); // Check for token

  if (!token) return res.status(401).json({
    msg: 'No token, authorization denied'
  });

  try {
    // Verify token
    var decoded = _jsonwebtoken["default"].verify(token, JWT_SECRET); // Add user from payload


    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({
      msg: 'Token is not valid'
    });
  }
};

exports["default"] = _default;
//# sourceMappingURL=auth.js.map