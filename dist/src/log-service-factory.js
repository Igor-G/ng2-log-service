import { LogService } from './log.service';
import { LogObserverService } from './ng2-log-service';
import { Injectable } from '@angular/core';
var LogServiceFactory = /** @class */ (function () {
    function LogServiceFactory(logObserver) {
        this.logObserver = logObserver;
    }
    LogServiceFactory.prototype.newLogService = function () {
        return new LogService(this.logObserver);
    };
    LogServiceFactory.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LogServiceFactory.ctorParameters = function () { return [
        { type: LogObserverService, },
    ]; };
    return LogServiceFactory;
}());
export { LogServiceFactory };
//# sourceMappingURL=log-service-factory.js.map