import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-link',
  imports: [CommonModule, RouterLink],
  templateUrl: './card-link.html',
  styleUrl: './card-link.scss',
})
export class CardLink {
  @Input() title!: string;
  @Input() description!: string;
  @Input() routerLink!: string;
}
