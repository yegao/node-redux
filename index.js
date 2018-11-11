"use strict";
exports.__esModule = true;
exports.createStore = function (reducer) {
    var state;
    var dispatch = function (action) {
        state = reducer(state, action);
    };
    var getState = function () {
        return state;
    };
    return { dispatch: dispatch, getState: getState };
};
