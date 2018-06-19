import { LogLevel, ALL } from '../log-types';
var ExtensionListener = /** @class */ (function () {
    function ExtensionListener() {
        this.namespace = ALL;
        this.level = LogLevel.All;
    }
    ExtensionListener.prototype.onLog = function (namespace, level, logMessage) {
        var event = new CustomEvent('logMonitorEvent', {
            detail: {
                message: logMessage.message,
                namespace: namespace,
                level: level,
                data: logMessage.obj
            }
        });
        setTimeout(function () {
            window.dispatchEvent(event);
        }, 0);
    };
    return ExtensionListener;
}());
export { ExtensionListener };
//# sourceMappingURL=extension-listener.js.map