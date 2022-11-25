import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoggingService { 
    lastLog: string = undefined;

    printLog(message: string) {
        //logs...
        this.lastLog = message;
    }
}