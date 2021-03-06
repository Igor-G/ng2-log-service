import { LogService } from './log.service';
import { Injectable} from '@angular/core';
import { LogObserverService } from './log-observer.service';

@Injectable()
export class LogServiceFactory {

    constructor(private logObserver: LogObserverService) {
        
    }

    public newLogService() {
        return new LogService(this.logObserver);
    }

}