"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatasetEditor = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("os-types/src/index"));

var _jsFileDownload = _interopRequireDefault(require("js-file-download"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Upload = _interopRequireDefault(require("../Upload"));

var _TablePreview = _interopRequireDefault(require("../TablePreview"));

var _TableSchema = _interopRequireDefault(require("../TableSchema"));

var _ResourceList = _interopRequireDefault(require("../ResourceList"));

var _Metadata = _interopRequireDefault(require("../Metadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatasetEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(DatasetEditor, _React$Component);

  var _super = _createSuper(DatasetEditor);

  function DatasetEditor(props) {
    var _this;

    _classCallCheck(this, DatasetEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleRichTypeCount", function (unfilledRichTypes) {
      if (unfilledRichTypes == 0) {
        _this.setState({
          richTypeFilled: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeMetadata", function (event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      var dataset = _objectSpread({}, _this.state.dataset);

      if (["tags", "years_included"].includes(name)) {
        var vals = value.split(",");
        dataset[name] = vals.map(function (val) {
          return val.trim();
        });
      } else if (["disaggregation", "budget_stage"].includes(name)) {
        var currentVals = dataset[name] || [];

        if (!target.checked) {
          currentVals = currentVals.filter(function (val) {
            return val != value;
          }); //remove value

          dataset[name] = currentVals;
        } else {
          if (!currentVals.includes(value)) {
            //only add value if it is unique
            currentVals.push(value);
            dataset[name] = currentVals;
          }
        }
      } else {
        dataset[name] = value;
      }

      _this.setState({
        dataset: dataset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mapDatasetToFiscalFormat", function (resource) {
      var dataset = _objectSpread({}, _this.state.dataset);

      var model;
      var schema;

      if (dataset.resources.length > 1) {
        //There's an existing resource, get schema and model
        model = dataset.resources[0].model;
        schema = dataset.resources[0].schema;
        resource.schema = schema;
        resource.model = model;
      } else {
        //first resource, generate schema and model
        resource.schema.fields.forEach(function (f) {
          f.type = f.columnType;
          delete f.columnType; //os-types requires type to be of rich type and will not accept the property columnType
        });
        var fdp = new _index.default().fieldsToModel(resource["schema"]["fields"]);
        resource.schema.fields = Object.values(fdp.schema.fields);
        resource.model = fdp.model;
      }

      var resources = dataset.resources.map(function (res) {
        if (res.hash == resource.hash) {
          return resource;
        } else {
          return res;
        }
      });

      _this.setState({
        dataset: _objectSpread(_objectSpread({}, dataset), {}, {
          resources: resources
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "downloadDatapackage", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _jsFileDownload.default)(JSON.stringify(_this.state.dataset), "datapackage.json");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "deleteResource", function (hash) {
      var _this$state = _objectSpread({}, _this.state),
          dataset = _this$state.dataset;

      if (window.confirm("Are you sure you want to delete this resource?")) {
        var temp_dataset = _objectSpread({}, dataset);

        var path;

        if (temp_dataset.resources.length == 1) {
          path = temp_dataset.resources[0].path;
          temp_dataset.resources = [];
        } else {
          var newResource = temp_dataset.resources.filter(function (resource) {
            if (resource.hash == hash) {
              path = resource.path;
            }

            return resource.hash != hash;
          });
          temp_dataset.resources = newResource;
        }

        (0, _axios.default)({
          method: "delete",
          url: "/api/dataset/".concat(temp_dataset.name),
          data: {
            metadata: temp_dataset,
            path: path
          }
        }).then(function (response) {
          _this.setState({
            dataset: temp_dataset,
            resource: {}
          });

          alert("Resource has been removed successfully");
        }).catch(function (error) {
          console.log(error);
          alert("Error when removing resource!");
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setLoading", function (isLoading) {
      _this.setState({
        ui: _objectSpread(_objectSpread({}, _this.state.ui), {}, {
          loading: isLoading
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadStatus", function (status) {
      var ui = _this.state.ui;

      var newUiState = _objectSpread(_objectSpread({}, ui), {}, {
        success: status.success,
        error: status.error,
        loading: status.loading,
        errorMsg: status.errorMsg
      });

      _this.setState({
        ui: newUiState
      });

      if (status.success && !status.loading) {
        _this.nextScreen();
      } else if (!status.success && status.error) {
        // const dataset = { ...this.state.dataset };
        // if ("resources" in dataset && dataset["resources"].length > 0) {
        //   dataset.resources.pop();
        // }
        // console.log("Here", dataset);
        // this.setState({ dataset });
        _this.prevScreen();
      } //clears error message after 6 seconds


      setTimeout(function () {
        _this.setState({
          ui: _objectSpread(_objectSpread({}, _this.state.ui), {}, {
            errorMsg: ""
          })
        });
      }, 10000);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeResourceId", function (resourceId) {
      _this.setState({
        resourceId: resourceId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextScreen", function () {
      var currentStep = _this.state.currentStep;

      if (currentStep == 3) {
        _this.mapDatasetToFiscalFormat(_objectSpread({}, _this.state.resource)); //generate model and fiscal schema as soon as richtypes have been updated.

      }

      var newStep = currentStep + 1;

      _this.setState({
        currentStep: newStep
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prevScreen", function () {
      var newStep = _this.state.currentStep - 1;

      _this.setState({
        currentStep: newStep
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaveDataset", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                saveButtonText: "Saving..."
              });

              (0, _axios.default)({
                method: "post",
                url: "/api/dataset/".concat(_this.state.dataset.name),
                data: {
                  metadata: _this.state.dataset,
                  description: _this.state.dataset.description
                }
              }).then(function (response) {
                _this.setState({
                  saveButtonText: "Save"
                });

                alert("Uploaded Sucessfully");

                _this.setState({
                  currentStep: 0
                });
              }).catch(function (error) {
                console.log(error);
                alert("Error on upload dataset!");
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    var _dataset = props.config.dataset;
    _dataset.encoding = "utf_8";
    _dataset.format = "csv";
    _this.state = {
      dataset: _dataset,
      resource: {},
      //This will hold the uploaded resource metadata
      datasetId: _dataset.id,
      ui: {
        fileOrLink: "",
        uploadComplete: false,
        success: false,
        error: false,
        loading: false,
        errorMsg: ""
      },
      client: null,
      isResourceEdit: false,
      currentStep: props.config.skipUpload ? 4 : 0,
      richTypeFilled: false,
      saveButtonText: "Save"
    };
    _this.metadataHandler = _this.metadataHandler.bind(_assertThisInitialized(_this));
    _this.handleRichTypeCount = _this.handleRichTypeCount.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatasetEditor, [{
    key: "metadataHandler",
    value: function metadataHandler(resource) {
      var _this$mapResourceToDa = this.mapResourceToDatapackageResource(resource),
          dataset = _this$mapResourceToDa.dataset,
          updatedResource = _this$mapResourceToDa.resource;

      this.setState({
        dataset: dataset,
        resource: updatedResource,
        tablePreviewSample: resource.tablePreviewSample,
        tablePreviewColumns: resource.tablePreviewColumns
      });
    }
  }, {
    key: "mapResourceToDatapackageResource",
    value: function mapResourceToDatapackageResource(fileResource) {
      var dataset = _objectSpread({}, this.state.dataset);

      var resource = {};
      resource["bytes"] = fileResource.size;
      resource["hash"] = fileResource.hash;
      resource["format"] = fileResource.format;
      resource["schema"] = fileResource.schema;
      resource["encoding"] = fileResource.encoding;
      resource["mediatype"] = fileResource.type;
      resource["name"] = fileResource.name;
      resource["dialect"] = fileResource.dialect;
      resource["path"] = fileResource.path;

      if (Object.keys(dataset).includes("resources")) {
        dataset.resources.push(resource);
      } else {
        dataset["resources"] = [resource];
      }

      resource["sample"] = fileResource.sample;
      return {
        dataset: dataset,
        resource: resource
      };
    } //set state of rich type field. If all rich type fields have been filled,
    // then activate the next button in the Table Schema screen

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "errorMsg"
      }, this.state.ui.errorMsg)), /*#__PURE__*/_react.default.createElement("form", {
        className: "upload-wrapper",
        onSubmit: function onSubmit(event) {
          event.preventDefault();
          return _this2.handleSaveDataset();
        }
      }, this.state.currentStep == 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ResourceList.default, {
        dataset: this.state.dataset,
        addResourceScreen: this.nextScreen,
        deleteResource: this.deleteResource
      })), this.state.currentStep == 1 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "upload-header"
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "upload-header__title_h1"
      }, "Provide your data file"), /*#__PURE__*/_react.default.createElement("h2", {
        className: "upload-header__title_h2"
      }, "Supported format: CSV")), /*#__PURE__*/_react.default.createElement(_Upload.default, {
        client: this.state.client,
        resource: this.state.resource,
        metadataHandler: this.metadataHandler,
        datasetId: this.state.datasetId,
        handleUploadStatus: this.handleUploadStatus,
        organizationId: "gift-data",
        authToken: this.props.config.authToken,
        lfsServerUrl: this.props.config.lfsServerUrl,
        dataset: this.state.dataset
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "upload-edit-area"
      }, this.state.resource.sample && this.state.currentStep == 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "upload-header"
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "upload-header__title_h1"
      }, "Preview of your dataset")), /*#__PURE__*/_react.default.createElement(_TablePreview.default, {
        columns: this.state.tablePreviewColumns,
        data: this.state.tablePreviewSample
      })), this.state.resource.schema && this.state.currentStep == 3 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "upload-header"
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "upload-header__title_h1"
      }, "Describe your dataset")), /*#__PURE__*/_react.default.createElement(_TableSchema.default, {
        dataset: this.state.dataset,
        schema: this.state.resource.schema,
        data: this.state.tablePreviewSample || [],
        handleRichType: this.handleRichTypeCount
      })), this.state.currentStep == 4 && !this.state.savedDataset && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "upload-header"
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "upload-header__title_h1"
      }, "Describe Metadata")), /*#__PURE__*/_react.default.createElement(_Metadata.default, {
        dataset: this.state.dataset,
        handleChange: this.handleChangeMetadata
      })), /*#__PURE__*/_react.default.createElement("div", null, this.state.currentStep == 4 && !this.state.isResourceEdit && this.state.resource && /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-save",
        type: "submit"
      }, this.state.saveButtonText), this.state.currentStep == 4 && !this.state.isResourceEdit && this.state.resource && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn-download",
        onClick: this.downloadDatapackage
      }, "Download Package")))), /*#__PURE__*/_react.default.createElement("div", {
        className: "resource-edit-actions"
      }, this.state.ui.success && this.state.currentStep == 2 && /*#__PURE__*/_react.default.createElement("button", {
        className: "btn",
        onClick: this.nextScreen
      }, "Next"), this.state.currentStep == 3 ? this.state.richTypeFilled ? /*#__PURE__*/_react.default.createElement("button", {
        className: "btn",
        onClick: this.nextScreen
      }, "Next") : /*#__PURE__*/_react.default.createElement("button", {
        disabled: true,
        className: "btn"
      }, "Next") : ""));
    }
  }]);

  return DatasetEditor;
}(_react.default.Component);
/**
 * If the parent component doesn't specify a `config` and scope prop, then
 * the default values will be used.
 * */


exports.DatasetEditor = DatasetEditor;
DatasetEditor.defaultProps = {
  config: {
    authorizedApi: "/api/authorize/",
    lfsServerUrl: "https://localhost:6000",
    dataset: {},
    metastoreApi: "/api/dataset/"
  }
};
DatasetEditor.propTypes = {
  config: _propTypes.default.object.isRequired
};