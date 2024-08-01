import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-showcasecards',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './showcasecards.component.html',
  styleUrl: './showcasecards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ShowcasecardsComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() desc!: string;
  @Input() projectUrl!: string;
  @Input() chips!: string[];

}
