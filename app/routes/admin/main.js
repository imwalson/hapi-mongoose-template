const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const Config = require('../../../config');
const server = require('../../../app');
const AdminController = require('../../controllers/admin/main');

server.route([
    { method: 'GET',    path: '/admin/login',               config: AdminController.login     },
    { method: 'GET',    path: '/admin/logout',              config: AdminController.logout    },
    { method: 'GET',    path: '/admin',                     config: AdminController.index    },
    { method: 'GET',    path: '/admin/dashboard',           config: AdminController.dashboard    },
])