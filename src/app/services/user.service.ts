import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username : string;
  private clientid = 'b0f2cd10835fd12aaf51';
  private clientsecret = 'a3377cc401d0df147f214212548ea05335a41220';


  constructor(private http: HttpClient) {
    console.log("Service ready!");
    this.username = 'dhrithipai';
   }

  
   
   getProfileInfo(){
    
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
    // .pipe(map((res:any) => res.json()));
   }

   getProfileRepos(){
    
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret );
   }

   updateProfile(username : string){
    this.username = username;


   }


}
