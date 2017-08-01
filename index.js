/**
 * Created by mengqingdong on 2017/6/9.
 *
 * url:fetch url
 * options
 *    method:default POST
 *    headers: default 'application/json'
 *    timeout: default 5s
 *    body: json format
 *
 * successCallback (result, status): callback when response.ok is true
 * errorCallback (result, status): callback when an error occurred
 *
 */

import fetch from './fetch-polyfill';

export default class Http {

    static send = (url, options, successCallback, errorCallback) => {

        var ok = false;
        var status = 0;
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        var init = {
            method: (options && options.method) || 'POST',
            headers: (options && options.headers) || headers,
            timeout: (options && options.timeout) || 5000,
        }
        if (options && options.body) {
            init.body = JSON.stringify(options.body)
        }

        fetch(url, init)
            .then((response) => {
                status = response.status;
                ok = response.ok;
                return response.json();
            })
            .then((result) => {
                if (ok) {
                    if (successCallback) {
                        successCallback(result, status);
                    }
                } else {
                    if (errorCallback) {
                        errorCallback(result, status);
                    }
                }
            })
            .catch((error) => {
                if (errorCallback) {
                    errorCallback(error);
                }
            });
    }
}