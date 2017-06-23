const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const Config = require('../../../config');
const server = require('../../../app');
const Authentication = require('../../controllers/admin/authentication');

server.route([
    { method: 'GET',    path: '/admin/login',               config: Authentication.login     },
    { method: 'GET',    path: '/admin/logout',              config: Authentication.logout    },
])