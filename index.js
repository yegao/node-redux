"use strict";
exports.__esModule = true;
exports.splitPath = function (path) {
    return path.split(/\\|\//);
};
exports.createStore = function (reducer) {
    var state;
    var list;
    var listeners;
    var dispatch = function (action) {
        list.push(action); //一般放到session中
        state = reducer(state, action);
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            listener();
        }
    };
    var getState = function () {
        return state;
    };
    var subscribe = function (listener) {
        listeners.push(listener);
    };
    var hitAction = function (path, map, error) {
        var paths = exports.splitPath(path);
        var action = map;
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var part = paths_1[_i];
            if (!action[part]) {
                return error("path not found");
            }
            action = action[part];
        }
        if (!action.type) {
            return error("action has no type");
        }
        dispatch(action);
    };
    return { subscribe: subscribe, dispatch: dispatch, getState: getState, hitAction: hitAction };
};
