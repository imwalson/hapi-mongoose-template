const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const Config = requireR('/config');
const server = requireR('/app');
const mainController = requireR('/app/controllers/front/main');

server.route([
    { method: 'GET',    path: '/404',               config: mainController.notFound         },
    { method: 'GET',    path: '/',                  config: mainController.index            },
    { method: 'GET',    path: '/login',             config: mainController.login            }
])