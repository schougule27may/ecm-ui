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
    return this.http.get<ClientData[]> ('http://localhost:7979/clients');
  }
  saveClientData(client: any) {
      this.http.post<any>('http://localhost:7979/client', client).subscribe(data => {
      console.log(data);
    });
  }

}
