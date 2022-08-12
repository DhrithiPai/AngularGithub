import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public username !: string;
  public user : any;
  public repos !: any;
  totalRecords !: Number;
  constructor(private userService : UserService) {
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.userService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
      this.totalRecords = this.repos.length;

    });
  }

  public searchUser(){
    this.userService.updateProfile(this.username);
    
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.userService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
      this.totalRecords = this.repos.length;

    });

  }

   

  ngOnInit(): void {
  }

}
