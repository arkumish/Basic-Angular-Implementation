import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; //hold data  return from api
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getusers().subscribe(
      data => this.users$ = data 
    );
  }

}