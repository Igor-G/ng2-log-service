import { Injectable } from '@angular/core';
import { LogObserverService } from './log-observer.service';
import { LogLevel } from './log-types';
var LogService = /** @class */ (function () {
    function LogService(logObserver) {
        this.logObserver = logObserver;
    }
    Object.defineProperty(LogService.prototype, "namespace", {
        get: function () {
            return this._ns;
        },
        set: function (ns) {
            this._ns = ns;
        },
        enumerable: true,
        configurable: true
    });
    LogService.prototype.logDeferred = function (level, action) {
        this.logObserver.onDidLog(this._ns, level, action);
    };
    ;
    LogService.prototype.log = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.All; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.prototype.debug = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.Debug; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.prototype.info = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.Info; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.prototype.warn = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.Warn; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.prototype.error = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.Error; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.prototype.fatal = function (arg, obj, level) {
        if (obj === void 0) { obj = null; }
        if (level === void 0) { level = LogLevel.Fatal; }
        this.logObserver.onDidLog(this._ns, level, function () {
            return {
                message: arg,
                obj: obj
            };
        });
    };
    LogService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LogService.ctorParameters = function () { return [
        { type: LogObserverService, },
    ]; };
    return LogService;
}());
export { LogService };
//# sourceMappingURL=log.service.js.map