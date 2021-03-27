import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ClientData} from './client.data';

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor(private http: HttpClient) {
  }
  getClients() {
    console.log('Hey there modified');
    let  clients = [];
    let client = {
      clientId: 1,
      fistName: 'sandeep'
    };
    clients.push(client);
   // return this.http.get<ClientData[]> ('http://c7c2a1a6d54f.ngrok.io/clients');
    return clients;
    console.log('Hey there done');
  }

}
