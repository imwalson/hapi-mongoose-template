const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const Config = require('../../../config');
const server = require('../../../app');
const mainController = require('../../controllers/front/main');

server.route([
    { method: 'GET',    path: '/404',               config: mainController.notFound         },
    { method: 'GET',    path: '/',                  config: mainController.index            },
    { method: 'GET',    path: '/login',             config: mainController.login            }
])