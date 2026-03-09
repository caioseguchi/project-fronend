import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { UserService } from '../../service/user-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-get-all',
  imports: [HeaderComponent],
  templateUrl: './user-get-all.html',
  styleUrl: './user-get-all.scss',
})
export class UserGetAll {
  usuarios: any[] = [];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.userService.getAllUsuarios().subscribe({
      next: (data) => {
        console.log(data);
        this.usuarios = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
