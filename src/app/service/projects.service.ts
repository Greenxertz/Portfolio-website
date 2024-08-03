import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects = [
    {
      id: 1,
      imageUrl: '/Images/Pictures/projects/guessinggame/menu.png',
      title: 'Guessing Game',
      desc: 'A Game where the user guesses the song',
      chips: [
        'devicon-csharp-plain',
        'fa-solid fa-gear',
        'devicon-docker-plain',
      ],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        '/Images/Pictures/projects/guessinggame/menu.png',
        '/Images/Pictures/projects/guessinggame/about.png',
        '/Images/Pictures/projects/guessinggame/genre.png',
        '/Images/Pictures/projects/guessinggame/game.png',
        '/Images/Pictures/projects/guessinggame/list.png',
      ],
    },
    {
      id: 2,
      imageUrl: '/Images/Pictures/tukkiestools.png',
      title: 'Tukkies Tools',
      desc: 'Ecommerce website project',
      chips: [
        'devicon-php-plain',
        'devicon-mysql-plain-wordmark',
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
      ],
      projectUrl: 'https://tukkiestools.greenxertz.co.za/',
      images: [
        '/Images/Pictures/projects/tukkiestools/home.png',
        '/Images/Pictures/projects/tukkiestools/storepage.png',
        '/Images/Pictures/projects/tukkiestools/contact.png',
        '/Images/Pictures/projects/tukkiestools/admin.png',
      ],
    },
    {
      id: 3,
      imageUrl: '/Images/Pictures/portfolio.png',
      title: 'Portfolio website',
      desc: 'The website you are currently on',
      chips: [
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
        'devicon-angularmaterial-plain',
        'devicon-angular-plain',
      ],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        '/Images/Pictures/projects/portfolio/home.png',
        '/Images/Pictures/projects/portfolio/about.png',
        '/Images/Pictures/projects/portfolio/projects.png',
      ],
    },
    {
      id: 4,
      imageUrl: '/Images/Pictures/Github.png',
      title: 'WebDevEssentials',
      desc: 'The open source repo for quick links to some really amazing websites to help you with your web development.',
      chips: [],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: ['/Images/Pictures/projects/webessentials/repo.png'],
    },
  ];

  private prototypes = [
    {
      id: 5,
      imageUrl: '/Images/Pictures/underconstruction.jpg',
      title: 'Solid state management app',
      desc: 'Student and Time management app for tutors',
      chips: [],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [],
    },
    {
      id: 6,
      imageUrl: '/Images/Pictures/underconstruction.jpg',
      title: 'Solid state website',
      desc: 'Website for Solid State tutors',
      chips: [],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [],
    },
  ];
  getProjects() {
    return this.projects;
  }

  getPrototypes() {
    return this.prototypes;
  }

  getProjectById(id: number) {
    return (
      this.projects.find((project) => project.id === id) ||
      this.prototypes.find((prototype) => prototype.id === id)
    );
  }
}
