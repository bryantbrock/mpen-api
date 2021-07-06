"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('@prisma/client'),
    PrismaClient = _require.PrismaClient;

var userData = require('./fixtures/users');

var prisma = new PrismaClient();

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("Start seeding ...");
            _context2.next = 3;
            return prisma.user.create(userData[0]);

          case 3:
            console.log("Seeding finished.");

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _main.apply(this, arguments);
}

main()["catch"](function (e) {
  console.error(e);
  process.exit(1);
})["finally"]( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return prisma.$disconnect();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=seed.js.map