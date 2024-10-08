import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projectpage',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './projectpage.component.html',
  styleUrl: './projectpage.component.css',
})
export class ProjectPageComponent implements OnInit {
  project: any;
  images: string[] = [];
  currentSlide = 0;
  previousScrollPosition = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projectsService.getProjectById(projectId);
    if (this.project) {
      this.images = this.project.images;
    }
    if (history.state && history.state.scrollPosition !== undefined) {
      this.previousScrollPosition = history.state.scrollPosition;
    }
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide > 0
        ? this.currentSlide - 1
        : this.project.images.length - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide < this.project.images.length - 1
        ? this.currentSlide + 1
        : 0;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  return() {
    this.router.navigate(['/projects']).then(() => {
      window.scrollTo(0, this.previousScrollPosition || 0);
    });
  }
}
