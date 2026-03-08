import { Component } from '@angular/core';
import { CardLink } from '../../components/card-link/card-link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardLink, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
