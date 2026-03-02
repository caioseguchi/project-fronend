import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-link',
  imports: [CommonModule],
  templateUrl: './card-link.html',
  styleUrl: './card-link.scss',
})
export class CardLink {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
}
