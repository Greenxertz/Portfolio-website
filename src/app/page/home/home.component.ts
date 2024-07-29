import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../element/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tools = [
    {
      iconUrl: 'devicon-csharp-plain',
      title: 'C#',
    },
    {
      iconUrl: 'devicon-cplusplus-plain',
      title: 'C++',
    },
    {
      iconUrl: 'icon-delphi-svgrepo-com',
      title: 'Delphi',
    },
    {
      iconUrl: 'fa-solid fa-gear',
      title: 'RESTful APIs',
    },
    {
      iconUrl: 'devicon-mysql-plain-wordmark',
      title: 'MySQL',
    },
    {
      iconUrl: 'devicon-html5-plain-wordmark',
      title: 'HTML5',
    },
    {
      iconUrl: 'devicon-css3-plain-wordmark',
      title: 'CSS3',
    },
    {
      iconUrl: 'devicon-javascript-plain',
      title: 'JavaScript',
    },
    {
      iconUrl: 'devicon-php-plain',
      title: 'PHP',
    },
    {
      iconUrl: 'devicon-docker-plain',
      title: 'Docker',
    },
    {
      iconUrl: 'devicon-angularmaterial-plain',
      title: 'Angular Material',
    },
    {
      iconUrl: 'devicon-github-original',
      title: 'Github',
    },
    {
      iconUrl: 'devicon-git-plain',
      title: 'Git',
    },
    {
      iconUrl: 'fa-solid fa-book',
      title: 'More to come!',
    },
  ];

  frameworks = [
    {
      iconUrl: 'devicon-angular-plain',
      title: 'Angular',
    },
    {
      iconUrl: 'devicon-flutter-plain',
      title: 'Flutter',
    },
  ];

  hobbies = [
    {
      iconUrl: 'devicon-blender-original',
      title: 'Blender',
    },
    {
      iconUrl: 'icon-davinci-resolve-12',
      title: 'Da Vinci Resolve',
    },
    {
      iconUrl: 'icon-AutoCad_new_logo',
      title: 'Auto CAD',
    },
    {
      iconUrl: 'devicon-photoshop-plain',
      title: 'Adobe Photoshop',
    },
  ];
}
