/** 
*@description api 请求 Promise 化封装
******************************************** 
*@param {object} options 参数配置： 
                    path(请求的地址)
                    query（url 里的参数）
                    data（body 里的参数）
                    headers（请求头）
*@returns {promise} 返回 promise 包装后的结果
******************************************** 
**/ 

const _ = require('lodash');
const axios = require('axios');

const Config = requireR('/config');
const server = requireR('/app');
/*创建axios实例*/
const httpRequest = axios.create({
    baseURL: '',
    responseType:'json',
    headers: {
        'appId': 'AP339457443459235841'
    }
});

const apiRequest = function (options) {
    return new Promise(function(resolve,reject){
        var path = options.path || null,
            query = options.query || {},
            data = options.data || {},
            headers = options.headers || {};
        if(!path){
            reject({message: '请求缺少path参数'});
        }
        httpRequest
        .post(path, data, {
            params: query,
            headers: headers
        })
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                //console.log("error.response.data",error.response.data);
                reject(error.response.data);
            } else if (error.request) {
                //console.log("error.request",error.request);
                reject(error.request);
            } else {
                //console.log('Error', error.message);
                reject(error.message);
            }
        });
    })
};
server.method('apiRequest', apiRequest, { callback: false });