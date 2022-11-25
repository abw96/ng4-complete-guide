import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private loggingSerivce: LoggingService,
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.loggingSerivce.printLog('Hello from AppComponent');
    console.clear();
  }
}
