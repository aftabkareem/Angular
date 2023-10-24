import { Component, OnInit  } from '@angular/core';
import { UserListService } from '../services/users/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  specificUser: any;
  id: number = 1;
  inputObject = {
      id: 0,
      name: '',
      address: '',
      courseid: 0
  };
  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.userListService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
    //this.FetchParticularUser(1);
  }
  FetchParticularUser(id: number){
    this.userListService.getParticularUser(id).subscribe((data: any)=> {
      this.specificUser = data;
    })
  }

  AddStudent(){
    this.inputObject.name = 'Awais';
    this.inputObject.address = 'CureMD';
    this.inputObject.courseid = 2;

    this.userListService.postUser(this.inputObject);
  }
}
