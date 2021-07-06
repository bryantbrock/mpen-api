"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.MPEN_PORT;

_app["default"].listen(PORT, function () {
  return console.log("\n    \uD83D\uDE80 Server ready at: http://localhost:".concat(PORT, "\n    \u2B50\uFE0F See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api"));
});
//# sourceMappingURL=server.js.map