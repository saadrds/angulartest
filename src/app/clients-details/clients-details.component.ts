import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from '../agent-service.service';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {

  agentId : string = "4028b88179e2e6fa0179e2e719700001";
  public clients: Client[] =  [];


  constructor(private agentService : AgentServiceService) { }

  ngOnInit(): void {
    this.getAgentClients();
  }
  private  getAgentClients(){
    this.agentService.getAgentClients(this.agentId).subscribe(
      (response:Client[]) => {
      this.clients = response},(err : HttpErrorResponse) => {console.log (err)});
      
  }

}
