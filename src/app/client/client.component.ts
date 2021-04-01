import { Component, OnInit , Input} from '@angular/core';
import {ClientService} from '../client.service';
import {ClientData} from '../client.data';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {



  constructor(private clientService: ClientService) { }
  clients = this.clientService.getClients();
  selectedData?: ClientData;
  ngOnInit(): void {
  }
  onSelect(client: ClientData): void {
    this.selectedData = client;
  }

}
