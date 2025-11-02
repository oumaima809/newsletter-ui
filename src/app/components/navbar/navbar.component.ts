import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from '../../services/storageService/storage.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [Toolbar, ButtonModule, SplitButton, InputTextModule, IconField, InputIcon, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
export class NavbarComponent implements OnInit {
    constructor(private router: Router, private storageService:StorageService) {
    }

    loggedin = false;
    currentUser: any ;




    logout(): void {
      sessionStorage.removeItem('auth-user');
      this.loggedin = false;
      this.router.navigate(['/'])
    }


    ngOnInit() {
      this.storageService.isLoggedIn().subscribe({
      next: (data: any) => {
        this.loggedin = data ? true : false;
      },
      error: (err:any) => {
        console.log(err);
      }
    })
    }
}




