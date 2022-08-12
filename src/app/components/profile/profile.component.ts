import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user : any;
  username! : string;
  constructor(private userService : UserService) {
    
   }
   findProfile(){
    this.userService.updateProfile(this.username);
    this.userService.getProfileInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    
   }

  ngOnInit(): void {
  }

}
