import { ALL } from './log-observer.service';
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 1] = "All";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warn"] = 4] = "Warn";
    LogLevel[LogLevel["Error"] = 5] = "Error";
    LogLevel[LogLevel["Fatal"] = 6] = "Fatal";
})(LogLevel || (LogLevel = {}));
;
var ILogListener = /** @class */ (function () {
    function ILogListener() {
        this.namespace = ALL;
    }
    return ILogListener;
}());
export { ILogListener };
//# sourceMappingURL=log-types.js.map