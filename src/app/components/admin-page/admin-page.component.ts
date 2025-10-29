import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-admin-page',
  imports: [TableModule, CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
    constructor(private userService: UserService) {}

    emails = [];
     ngOnInit() {
    this.getAllEmails();
  }
    getAllEmails() {
    this.userService.getAllUserEmails().subscribe({
        next: data => {
            console.log(data);
            this.emails = data;
        },
        error: err => {
            console.log(err);
        }
    });
  }


}
