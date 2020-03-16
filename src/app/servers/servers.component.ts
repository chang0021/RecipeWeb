import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; 
  serverCreationStatus = "No server was created!"; 
  serverName="testServer"; 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000);
  }

  ngOnInit() {
  }

  OnCreateServer(){
    this.serverCreationStatus = "Server was created!"; 
  }

  OnUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; 
  }
}
