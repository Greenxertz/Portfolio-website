import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShowcasecardsComponent } from '../../element/showcasecards/showcasecards.component';
import { Router, NavigationExtras } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ShowcasecardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  prototypes: any[] = [];

  constructor(
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    this.prototypes = this.projectsService.getPrototypes();
  }

  goToProjectDetail(projectId: number) {
    const scrollPosition = window.scrollY;
    const navigationExtras: NavigationExtras = {
      state: { scrollPosition },
    };
    this.router.navigate(['/project', projectId], navigationExtras);
  }
}