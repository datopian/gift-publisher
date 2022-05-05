"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = require("react-table");

var _types = _interopRequireDefault(require("../../db/types.json"));

var _osTypes = _interopRequireDefault(require("../../db/os-types.json"));

var _osTypeDescriptions = _interopRequireDefault(require("../../db/os-type-descriptions.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var osTypesPath = "https://raw.githubusercontent.com/gift-data/gift-os-types/main/os-types.json";
var osTypesDescPath = "https://raw.githubusercontent.com/gift-data/gift-os-types/main/os-type-descriptions.json";

var TableSchema = function TableSchema(props) {
  var _useState = (0, _react.useState)(_osTypes.default),
      _useState2 = _slicedToArray(_useState, 2),
      userOSTypes = _useState2[0],
      setUserOSTypes = _useState2[1]; //set default value to local types in case of fetch issue


  var _useState3 = (0, _react.useState)(_osTypeDescriptions.default),
      _useState4 = _slicedToArray(_useState3, 2),
      userOSTypesDesc = _useState4[0],
      setUserOSTypesDesc = _useState4[1];

  var _useState5 = (0, _react.useState)(props.schema),
      _useState6 = _slicedToArray(_useState5, 2),
      schema = _useState6[0],
      setSchema = _useState6[1];

  var _useState7 = (0, _react.useState)(props.schema.fields.length),
      _useState8 = _slicedToArray(_useState7, 2),
      unfilledRichTypes = _useState8[0],
      setUnfilledRichTypes = _useState8[1];

  var _selectInputs = props.schema.fields.map(function (_) {
    return undefined;
  });

  var _useState9 = (0, _react.useState)(_selectInputs),
      _useState10 = _slicedToArray(_useState9, 2),
      selectFieldInputs = _useState10[0],
      setSelectFieldInputs = _useState10[1];

  var totalSchemaLength = props.schema.fields.length;

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      schemaPrevIndex = _useState12[0],
      setSchIndex = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      richTypePrevIndex = _useState14[0],
      setRichIndex = _useState14[1]; //Refs used in updated select field style. 
  // This is used to notify the user which rich type has incorrect value.


  var selectRefs = (0, _react.useRef)([]);
  selectRefs = props.schema.fields.map(function (_, index) {
    return selectRefs.current[index] = /*#__PURE__*/_react.default.createRef();
  });

  var _useState15 = (0, _react.useState)(selectRefs),
      _useState16 = _slicedToArray(_useState15, 2),
      selectRefsState = _useState16[0],
      _ = _useState16[1];

  (0, _react.useEffect)(function () {
    function fetchTypes() {
      return _fetchTypes.apply(this, arguments);
    }

    function _fetchTypes() {
      _fetchTypes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var uTypes, uTypeDesc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(osTypesPath);

              case 2:
                _context.next = 4;
                return _context.sent.json();

              case 4:
                uTypes = _context.sent;
                _context.next = 7;
                return fetch(osTypesDescPath);

              case 7:
                _context.next = 9;
                return _context.sent.json();

              case 9:
                uTypeDesc = _context.sent;
                setUserOSTypes(uTypes);
                setUserOSTypesDesc(uTypeDesc);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchTypes.apply(this, arguments);
    }

    fetchTypes();
  }, []);
  (0, _react.useEffect)(function () {
    if (props.dataset.resources && props.dataset.resources.length > 1 && resourceHasRichType(props.dataset)) {
      props.handleRichType(0);
    }
  }, []);

  var data = _react.default.useMemo(function () {
    return _toConsumableArray(props.data);
  }, [schema]);

  var columnsSchema = schema.fields.map(function (item, index) {
    return {
      Header: item.name ? item.name : "column_".concat(index + 1),
      accessor: item.name ? item.name : "column_".concat(index + 1)
    };
  });

  var columns = _react.default.useMemo(function () {
    return _toConsumableArray(columnsSchema);
  }, [schema]);

  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  var handleChange = function handleChange(event, key, index) {
    var value = event.value;

    var newSchema = _objectSpread({}, schema);

    if (key == "columnType") {
      var type = newSchema.fields[index]["type"];
      var selectedRichType = userOSTypes[value]['dataType'];

      if (type == selectedRichType) {
        //do richtype validation here
        selectRefsState[index].current.style.background = "white";
        var _value = event.value;
        newSchema.fields[index][key] = _value;
        setSchema(newSchema);
        setUnfilledRichTypes(unfilledRichTypes - 1);
        props.handleRichType(unfilledRichTypes - 1);
      } else {
        var newFInputs = _toConsumableArray(selectFieldInputs);

        newFInputs[index] = undefined;
        setSelectFieldInputs(newFInputs);
        selectRefsState[index].current.style.background = "red";

        if (unfilledRichTypes < totalSchemaLength && index != richTypePrevIndex) {
          setUnfilledRichTypes(unfilledRichTypes + 1);
          props.handleRichType(unfilledRichTypes + 1);
          setRichIndex(index);
        }

        if (unfilledRichTypes < totalSchemaLength && index == richTypePrevIndex) {
          setUnfilledRichTypes(unfilledRichTypes + 1);
          props.handleRichType(unfilledRichTypes + 1);
          setRichIndex(index);
        }

        alert("Invalid richtype for type ".concat(type));
      }
    } else {
      var columnValue = selectRefsState[index].current.textContent.split('➜')[0].trim();
      columnValue = columnValue === "Select..." ? undefined : columnValue;
      var columnType = columnValue ? userOSTypes[columnValue]['dataType'] : undefined;
      var typeValue = event.target.value;

      if (columnValue) {
        if (columnType != typeValue) {
          var _newFInputs = _toConsumableArray(selectFieldInputs);

          _newFInputs[index] = undefined;
          setSelectFieldInputs(_newFInputs);
          selectRefsState[index].current.style.background = "red";

          if (unfilledRichTypes < totalSchemaLength && index != schemaPrevIndex) {
            setUnfilledRichTypes(unfilledRichTypes + 1);
            props.handleRichType(unfilledRichTypes + 1);
            setSchIndex(index);
          }

          newSchema.fields[index][key] = typeValue;
          setSchema(newSchema);
          alert("Invalid richtype for type ".concat(typeValue));
        } else {
          selectRefsState[index].current.style.background = "white";
          newSchema.fields[index][key] = typeValue;
          setSchema(newSchema);
          setUnfilledRichTypes(unfilledRichTypes - 1);
          props.handleRichType(unfilledRichTypes - 1);
        }
      } else {
        newSchema.fields[index][key] = event.target.value;
        setSchema(newSchema);
      }
    }
  };

  var resourceHasRichType = function resourceHasRichType(dataset) {
    if (Object.keys(dataset).includes("resources") && dataset.resources.length > 0) {
      var fields = dataset.resources[0].schema.fields;
      var columnTypes = fields.filter(function (field) {
        return Object.keys(field).includes("columnType");
      });
      var hasRichTypes = columnTypes.length == fields.length ? true : false;
      return hasRichTypes;
    }
  }; //if the the user upload a new file, will update the state
  //and render with the new values


  (0, _react.useEffect)(function () {
    setSchema(props.schema);
  }, [props.schema]); //set column types search input box

  var ctypeKeys = Object.keys(userOSTypes);
  var columnTypeOptions = ctypeKeys.map(function (key) {
    var desc;
    var label;
    var value = key;

    if (userOSTypesDesc[key]) {
      desc = userOSTypesDesc[key]["description"];
      label = value + " " + "➜" + " " + desc;
    } else {
      desc = "";
      label = value;
    }

    return {
      label: label,
      value: value
    };
  });

  var renderEditSchemaField = function renderEditSchemaField(key) {
    if (key === "type") {
      if (props.dataset.resources && props.dataset.resources.length > 1 && resourceHasRichType(props.dataset)) {
        var existingTypes = props.dataset.resources[0].schema.fields.map(function (field) {
          return field.type;
        }); //The schema already exists. Prefill and set to uneditable

        return existingTypes.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: "schema-type-field-".concat(key, "-").concat(index)
          }, /*#__PURE__*/_react.default.createElement("input", {
            className: "table-tbody-input",
            type: "text",
            value: item,
            disabled: true
          }));
        });
      } else {
        return schema.fields.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: "schema-type-field-".concat(key, "-").concat(index)
          }, /*#__PURE__*/_react.default.createElement("select", {
            className: "table-tbody-select",
            value: item[key] || "",
            onChange: function onChange(event) {
              return handleChange(event, key, index);
            }
          }, _types.default.type.map(function (item, index) {
            return /*#__PURE__*/_react.default.createElement("option", {
              key: "schema-type-field-option-".concat(item, "-").concat(index),
              value: item
            }, item);
          })));
        });
      }
    } //style for column rich type select field


    var customStyles = {
      menu: function menu(provided, state) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          borderBottom: "1px dotted pink",
          color: state.selectProps.menuColor
        });
      },
      singleValue: function singleValue(provided, state) {
        var opacity = state.isDisabled ? 0.5 : 1;
        var transition = "opacity 300ms";
        return _objectSpread(_objectSpread({}, provided), {}, {
          opacity: opacity,
          transition: transition
        });
      }
    };

    if (key === "columnType") {
      if (props.dataset.resources && props.dataset.resources.length > 1 && resourceHasRichType(props.dataset)) {
        var existingRichTypes = props.dataset.resources[0].schema.fields.map(function (field) {
          return field.columnType;
        }); //The schema already exists, and we assume columns have the same richTypes. Prefill and set to uneditable

        return existingRichTypes.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: "schema-type-field-".concat(key, "-").concat(index)
          }, /*#__PURE__*/_react.default.createElement("input", {
            className: "table-tbody-input",
            type: "text",
            value: item,
            disabled: true
          }));
        });
      } else {
        return schema.fields.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement("td", {
            key: "schema-type-field-".concat(key, "-").concat(index),
            ref: selectRefsState[index]
          }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
            key: "select#".concat(index),
            styles: customStyles,
            options: columnTypeOptions,
            value: selectFieldInputs[index],
            inputValue: selectFieldInputs[index],
            menuColor: "black",
            onChange: function onChange(event) {
              handleChange(event, key, index);
            }
          }));
        });
      }
    }

    return schema.fields.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: "schema-field-".concat(key, "-").concat(index)
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: "table-tbody-input",
        type: "text",
        value: item[key],
        onChange: function onChange(event) {
          return handleChange(event, key, index);
        }
      }));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-schema-info_container"
  }, /*#__PURE__*/_react.default.createElement("table", _extends({
    className: "table-schema-info_table"
  }, getTableProps()), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react.default.createElement("tr", _extends({
      className: "table-thead-tr"
    }, headerGroup.getHeaderGroupProps()), /*#__PURE__*/_react.default.createElement("th", {
      className: "table-thead-th mr-4"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react.default.createElement("th", _extends({
        className: "table-thead-th"
      }, column.getHeaderProps()), column.render("Header"));
    }));
  })), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-tbody-help-td"
  }, "Type"), renderEditSchemaField("type")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-tbody-help-td"
  }, "Rich Type"), renderEditSchemaField("columnType")), /*#__PURE__*/_react.default.createElement("br", null), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), /*#__PURE__*/_react.default.createElement("td", null), row.cells.map(function (cell) {
      return /*#__PURE__*/_react.default.createElement("td", _extends({}, cell.getCellProps(), {
        className: "table-tbody-td"
      }), cell.render("Cell"));
    }));
  }))))));
};

TableSchema.propTypes = {
  schema: _propTypes.default.object.isRequired,
  data: _propTypes.default.array.isRequired,
  handleRichType: _propTypes.default.func.isRequired
};
var _default = TableSchema;
exports.default = _default;