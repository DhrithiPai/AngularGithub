import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repos : any;
  
  page : number =1;

  constructor(private userService : UserService) {
    
   }
 

  ngOnInit(): void {
  }

}
