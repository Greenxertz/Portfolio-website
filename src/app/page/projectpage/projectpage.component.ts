import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const projectId = +this.route.snapshot.paramMap.get('id')!;
    this.project = this.projectsService.getProjectById(projectId);
    if (this.project) {
      this.images = this.project.images;
    }
  }

  getTransform(index: number): string {
    const numImages = this.images.length;
    const angle = 360 / numImages;
    return `rotateY(${index * angle}deg) translateZ(150px)`;
  }
}