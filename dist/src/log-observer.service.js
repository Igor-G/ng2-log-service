import { Injectable, Inject, InjectionToken } from '@angular/core';
import { namespaceIsValid, ALL, FUZZY_CHARACTER } from './ng2-log-service';
var INDEX_NOT_FOUND = -1;
export var LOG_LISTENER = new InjectionToken('LogListener');
var LogObserverService = /** @class */ (function () {
    function LogObserverService(args) {
        if (args === void 0) { args = []; }
        this.args = args;
        this.listeners = [];
        this.registry = {};
        this.registry[ALL] = [];
        // register listeners
        for (var i in args) {
            this.register(args[i]);
        }
    }
    // returns a listener from the registry
    // returns a listener from the registry
    LogObserverService.prototype.getListener = 
    // returns a listener from the registry
    function (listener) {
        var match = this.listeners.filter(function (l) {
            if (l instanceof listener) {
                return l;
            }
        })[0];
        return match;
    };
    LogObserverService.prototype.register = function (listener) {
        //console.debug('register for '+listener.namespace);
        if (!namespaceIsValid(listener.namespace)) {
            throw 'Listener cannot register to (null) Namespace';
        }
        if (!this.namespaceInRegistry(listener.namespace)) {
            this.registry[listener.namespace] = [];
        }
        this.registry[listener.namespace].push(listener);
        this.listeners.push(listener);
    };
    LogObserverService.prototype.unregister = function (listener) {
        if (this.namespaceInRegistry(listener.namespace)) {
            var listeners = this.registry[listener.namespace];
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            // remove from listeners
            // index = this.listeners.indexOf(listener);
            // listeners.splice(index, 1);
            // remove completely if no listeners
            if (listeners.length === 0) {
                delete (this.registry[listener.namespace]);
            }
        }
    };
    ;
    LogObserverService.prototype.onDidLog = function (namespace, level, action) {
        if (!namespaceIsValid(namespace)) {
            throw 'Invalid Log Entry! namespace cannot be (null)';
        }
        var listeners = this.listenersToNotify(namespace, level);
        if (listeners.length) {
            var logMessage = action();
            listeners.forEach(function (listener) {
                listener.onLog(namespace, level, logMessage);
            });
        }
    };
    LogObserverService.prototype.exactListenersToNotify = function (namespace, level) {
        var listeners = [];
        if (this.namespaceInRegistry(namespace)) {
            listeners = this.extractQualifiedListenersForLogLevel(this.registry[namespace], level);
        }
        return listeners;
    };
    LogObserverService.prototype.extractQualifiedListenersForLogLevel = function (listeners, level) {
        var qualifiedListeners = [];
        listeners.forEach(function (listener) {
            if (level >= listener.level) {
                qualifiedListeners.push(listener);
            }
        });
        return qualifiedListeners;
    };
    LogObserverService.prototype.fuzzyListenersToNotify = function (namespace, level) {
        var _this = this;
        var listeners = [];
        Object.keys(this.registry).forEach(function (key) {
            if (key.indexOf(FUZZY_CHARACTER) !== INDEX_NOT_FOUND) {
                if (key === FUZZY_CHARACTER) {
                    listeners = listeners.concat(_this.extractQualifiedListenersForLogLevel(_this.registry[key], level));
                    return;
                }
                var startsWith = key.split(FUZZY_CHARACTER)[0];
                if (namespace.indexOf(startsWith) !== INDEX_NOT_FOUND) {
                    listeners = listeners.concat(_this.extractQualifiedListenersForLogLevel(_this.registry[key], level));
                }
            }
        });
        return listeners;
    };
    ;
    LogObserverService.prototype.listenersToNotify = function (namespace, level) {
        var listeners = [];
        // exact match listeners that qualify
        if (this.namespaceInRegistry(namespace)) {
            listeners = this.exactListenersToNotify(namespace, level);
        }
        // fuzzy match listeners that qualify
        listeners = listeners.concat(this.fuzzyListenersToNotify(namespace, level));
        return listeners;
    };
    LogObserverService.prototype.namespaceInRegistry = function (namespace) {
        return (namespace in this.registry);
    };
    LogObserverService.prototype.countListenersForNamespace = function (namespace) {
        if (!this.namespaceInRegistry(namespace)) {
            return 0;
        }
        return this.registry[namespace].length;
    };
    LogObserverService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LogObserverService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [LOG_LISTENER,] },] },
    ]; };
    return LogObserverService;
}());
export { LogObserverService };
//# sourceMappingURL=log-observer.service.js.map