"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlFns = exports.urlVtb = exports.urlSber = exports.app = void 0;

var _sberLoginPage = require("./sberLoginPage");

var _createTaxpayerPage = require("./createTaxpayerPage");

var _data = require("./data");

var _locatorPage = require("./locatorPage");

var _filterSearchPage = require("./filterSearchPage");

// импортируме функию FilterSearchPageиз файла filterSearchPage.js
var urlSber = 'https://sber.cprr-dev.weintegrator.com/login';
exports.urlSber = urlSber;
var urlVtb = 'https://vtb.cprr-dev.weintegrator.com/login';
exports.urlVtb = urlVtb;
var urlFns = 'https://fns.cprr-dev.weintegrator.com/login';
exports.urlFns = urlFns;

var app = function app() {
  return {
    //  фукнция
    sberLoginPage: function sberLoginPage() {
      return new _sberLoginPage.SberLoginPage();
    },
    createTaxpayerPage: function createTaxpayerPage() {
      return new _createTaxpayerPage.CreateTaxpayerPage();
    },
    locatorPage: function locatorPage() {
      return new _locatorPage.LocatorPage();
    },
    filterSearchPage: function filterSearchPage() {
      return new _filterSearchPage.FilterSearchPage();
    },
    data: function data() {
      return new _data.DataGenerate();
    }
  };
};

exports.app = app;