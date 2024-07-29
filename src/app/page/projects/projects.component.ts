import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowcasecardsComponent } from '../../element/showcasecards/showcasecards.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ShowcasecardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Guessing Game',
      desc: 'A Game where the user guesses the song',
      chips: [
        'devicon-csharp-plain',
        'fa-solid fa-gear',
        'devicon-docker-plain',
      ],
    },
    {
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Tukkies Tools',
      desc: 'Ecommerce website project',
      chips: [
        'devicon-php-plain',
        'devicon-mysql-plain-wordmark',
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
      ],
    },
    {
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Portfolio website',
      desc: 'The website you are currently on',
      chips: [
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
        'devicon-angularmaterial-plain',
        'devicon-angular-plain',
      ],
    },
  ];
}
