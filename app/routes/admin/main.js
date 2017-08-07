const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const Config = requireR('/config');
const server = requireR('/app');
const AdminController = requireR('/app/controllers/admin/main');

server.route([
    { method: 'GET',    path: '/admin/login',               config: AdminController.login     },
    { method: 'GET',    path: '/admin/logout',              config: AdminController.logout    },
    { method: 'GET',    path: '/admin',                     config: AdminController.index    },
    { method: 'GET',    path: '/admin/dashboard',           config: AdminController.dashboard    },
])