import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Router } from '@angular/router'; // Correct import for Angular Router

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], // Fixed styleUrls
})
export class FooterComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
