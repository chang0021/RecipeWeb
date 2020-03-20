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
  serverCreated = false; 
  servers = ['testserver', 'testserver 2']; 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000);
  }

  ngOnInit() {
  }

  OnCreateServer(){
    this.serverCreated = true; 
    this.servers.push(this.serverName); 
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName; 
  }

  OnUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; 
  }
}
