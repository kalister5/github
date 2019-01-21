import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'f9c23f736d6ecbbe42ec';
  private clientsecret = 'ff510d303934c61f69d04c849d943ba15d7a4940';

  constructor(private http:Http) {
  	console.log("service is now ready!");
  	this.username = 'lex-of-pakawa';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
