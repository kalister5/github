import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = 'c5a1730ce870d69e94e7';
  private clientsecret = 'aeab2f70b3eabd646a340e98e26644e0b9618a74';

  constructor(private http: Http) {
    console.log("service is now ready!");
    this.username = 'kalister';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
