import { LogService } from './log.service';
import { LogObserverService } from './ng2-log-service';
import { Injectable} from '@angular/core';

@Injectable()
export class LogServiceFactory {

    constructor(private logObserver: LogObserverService) {
        
    }

    public newLogService() {
        return new LogService(this.logObserver);
    }

}