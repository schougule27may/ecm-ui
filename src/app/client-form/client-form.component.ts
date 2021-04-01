import { Component, Input, OnInit } from '@angular/core';
import {ClientData} from '../client.data';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Input() client?: ClientData;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }
  saveClient(client: ClientData){
    console.log('saveClient', client);
    this.clientService.saveClientData(client);
  }

}
