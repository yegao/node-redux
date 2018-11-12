"use strict";
exports.__esModule = true;
exports.splitPath = function (path) {
    return path.split(/\\|\//);
};
exports.createStore = function (reducer) {
    var state;
    var dispatch = function (action) {
        state = reducer(state, action);
    };
    var getState = function () {
        return state;
    };
    var interatePath = function (path) {
        return exports.splitPath(path).reduce(function (prev, next) {
            dispatch({ type: next });
            return state;
        });
    };
    return { dispatch: dispatch, getState: getState, interatePath: interatePath };
};
