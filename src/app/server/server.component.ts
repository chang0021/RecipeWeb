import { Component} from '@angular/core'
@Component({
    selector: 'app-server',
    styles: [`
        .online{
            color: white; 
        }
    `],
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId : number = 10; 
    serverStatus : string = Math.random() > 0.5 ? "offline" : "online"; 

    getServerStatus () {
        return this.serverStatus; 
    }

    getColor(){
        return this.serverStatus === "offline" ? "red" : "green";
    }
}