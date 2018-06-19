import { LogLevel, ALL } from '../log-types';
var ConsoleListenerConfig = /** @class */ (function () {
    function ConsoleListenerConfig() {
        this.prefixLogsWithNamespace = true;
        this.namespaceWhiteList = [ALL];
        this.enabled = true;
        this.enablePrefix = false;
    }
    return ConsoleListenerConfig;
}());
export { ConsoleListenerConfig };
export function empty() {
    return "";
}
var defaultConfig = {
    prefixLogsWithNamespace: true,
    namespaceWhiteList: [ALL],
    enabled: true,
    prefix: empty,
    enablePrefix: true,
    logLevel: LogLevel.All
};
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener(config) {
        this.config = config;
        this.namespace = ALL;
        this.level = LogLevel.All;
        // merge default config with config
        this.setConfig(config);
    }
    ConsoleListener.prototype.setConfig = function (config) {
        this.config = Object.assign(defaultConfig, config);
        this.level = this.config.logLevel;
    };
    // returns copy of config
    // returns copy of config
    ConsoleListener.prototype.getConfig = 
    // returns copy of config
    function () {
        return Object.assign({}, this.config);
    };
    ConsoleListener.prototype.onLog = function (namespace, level, logMessage) {
        if (!this.config.enabled) {
            return false;
        }
        if (!this.inWhitelist(namespace)) {
            return false;
        }
        if (level < this.config.logLevel) {
            return false;
        }
        var prefix = this.prefix(namespace);
        if (this.config.prefixLogsWithNamespace) {
            prefix += namespace + ': ';
        }
        var log = prefix + logMessage.message;
        switch (level) {
            case LogLevel.Debug:
                console.debug(log, this.beautifyObjectForConsole(logMessage.obj));
                break;
            case LogLevel.Info:
                console.info(log, this.beautifyObjectForConsole(logMessage.obj));
                break;
            case LogLevel.Warn:
                console.warn(log, this.beautifyObjectForConsole(logMessage.obj));
                break;
            case LogLevel.Error:
            case LogLevel.Fatal:
                console.error(log, this.beautifyObjectForConsole(logMessage.obj));
                break;
            case LogLevel.All:
            default:
                console.log(log, this.beautifyObjectForConsole(logMessage.obj));
                break;
        }
    };
    ConsoleListener.prototype.beautifyObjectForConsole = function (obj) {
        if (!obj) {
            return null;
        }
        return JSON.stringify(obj, null, 2);
    };
    ConsoleListener.prototype.prefix = function (namespace) {
        if (!this.config.enablePrefix) {
            return "";
        }
        var prefix = this.config.prefix();
        return prefix;
    };
    ConsoleListener.prototype.inWhitelist = function (namespace) {
        if (this.config.namespaceWhiteList.indexOf(ALL) !== -1) {
            return true;
        }
        if (this.config.namespaceWhiteList.indexOf(namespace) !== -1) {
            return true;
        }
        return false;
    };
    return ConsoleListener;
}());
export { ConsoleListener };
//# sourceMappingURL=console-listener.js.map