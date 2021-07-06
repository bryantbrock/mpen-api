"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _client = require("@prisma/client");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// routes
var prisma = new _client.PrismaClient();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.post("/signup", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, data, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email;
            data = {
              data: {
                name: name,
                email: email
              }
            };
            _context.next = 4;
            return prisma.user.create(data);

          case 4:
            result = _context.sent;
            res.json(result);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/post", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, title, content, authorEmail, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, title = _req$body2.title, content = _req$body2.content, authorEmail = _req$body2.authorEmail;
            _context2.next = 3;
            return prisma.post.create({
              data: {
                title: title,
                content: content,
                author: {
                  connect: {
                    email: authorEmail
                  }
                }
              }
            });

          case 3:
            result = _context2.sent;
            res.json(result);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.put('/post/:id/views', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return prisma.post.update({
              where: {
                id: Number(id)
              },
              data: {
                viewCount: {
                  increment: 1
                }
              }
            });

          case 4:
            post = _context3.sent;
            res.json(post);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.json({
              error: "Post with ID ".concat(id, " does not exist in the database")
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.put('/publish/:id', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, postData, updatedPost;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return prisma.post.findUnique({
              where: {
                id: Number(id)
              },
              select: {
                published: true
              }
            });

          case 4:
            postData = _context4.sent;
            _context4.next = 7;
            return prisma.post.update({
              where: {
                id: Number(id) || undefined
              },
              data: {
                published: !(postData !== null && postData !== void 0 && postData.published)
              }
            });

          case 7:
            updatedPost = _context4.sent;
            res.json(updatedPost);
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            res.json({
              error: "Post with ID ".concat(id, " does not exist in the database")
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app["delete"]("/post/:id", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, post;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return prisma.post["delete"]({
              where: {
                id: Number(id)
              }
            });

          case 3:
            post = _context5.sent;
            res.json(post);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app.get('/users', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return prisma.user.findMany();

          case 2:
            users = _context6.sent;
            res.json(users);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
app.get('/user/:id/drafts', /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, drafts;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return prisma.user.findUnique({
              where: {
                id: Number(id)
              }
            }).posts({
              where: {
                published: false
              }
            });

          case 3:
            drafts = _context7.sent;
            res.json(drafts);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
app.get("/post/:id", /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, post;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.next = 3;
            return prisma.post.findUnique({
              where: {
                id: Number(id)
              }
            });

          case 3:
            post = _context8.sent;
            res.json(post);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
app.get('/feed', /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$query, searchString, skip, take, orderBy, or, posts;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$query = req.query, searchString = _req$query.searchString, skip = _req$query.skip, take = _req$query.take, orderBy = _req$query.orderBy;
            or = searchString ? {
              OR: [{
                title: {
                  contains: searchString
                }
              }, {
                content: {
                  contains: searchString
                }
              }]
            } : {};
            _context9.next = 4;
            return prisma.post.findMany({
              where: _objectSpread({
                published: true
              }, or),
              include: {
                author: true
              },
              take: Number(take) || undefined,
              skip: Number(skip) || undefined,
              orderBy: {
                updatedAt: orderBy
              }
            });

          case 4:
            posts = _context9.sent;
            res.json(posts);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
app.get('/', /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return prisma.user.findMany({
              include: {
                posts: true,
                profile: true
              }
            })["catch"](function (e) {
              throw e;
            })["finally"]( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
              return _regenerator["default"].wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return prisma.$disconnect();

                    case 2:
                      return _context10.abrupt("return", _context10.sent);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })));

          case 2:
            user = _context11.sent;
            res.json({
              user: user
            });

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map