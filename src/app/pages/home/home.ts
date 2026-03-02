import { Component } from '@angular/core';
import { CardLink } from '../../components/card-link/card-link';

@Component({
  selector: 'app-home',
  imports: [CardLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
