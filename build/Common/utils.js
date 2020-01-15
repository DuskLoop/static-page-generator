"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateTime = exports.isProduction = void 0;

const isProduction = () => "production" === 'production';

exports.isProduction = isProduction;

const pad = n => n < 10 ? '0' + n : n;

const formatDateTime = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}.${pad(date.getMinutes())}.${pad(date.getSeconds())}`;

exports.formatDateTime = formatDateTime;