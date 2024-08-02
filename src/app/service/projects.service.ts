import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects = [
    {
      id: 1,
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Guessing Game',
      desc: 'A Game where the user guesses the song',
      chips: [
        'devicon-csharp-plain',
        'fa-solid fa-gear',
        'devicon-docker-plain',
      ],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
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
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        'path/to/image4.jpg',
        'path/to/image5.jpg',
        'path/to/image6.jpg',
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
        'path/to/image7.jpg',
        'path/to/image8.jpg',
        'path/to/image9.jpg',
      ],
    },
    {
      id: 4,
      imageUrl: '/Images/Pictures/Github.png',
      title: 'WebDevEssentials',
      desc: 'The open source repo for quick links to some really amazing websites to help you with your web development.',
      chips: [],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        'path/to/image10.jpg',
        'path/to/image11.jpg',
        'path/to/image12.jpg',
      ],
    },
  ];

  private prototypes = [
    {
      id: 5,
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Solid state management app',
      desc: 'A Game where the user guesses the song',
      chips: [
        'devicon-csharp-plain',
        'fa-solid fa-gear',
        'devicon-docker-plain',
      ],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        'path/to/image13.jpg',
        'path/to/image14.jpg',
        'path/to/image15.jpg',
      ],
    },
    {
      id: 6,
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: 'Solid state website',
      desc: 'Ecommerce website project',
      chips: [
        'devicon-php-plain',
        'devicon-mysql-plain-wordmark',
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
      ],
      projectUrl: 'https://github.com/Dario-Maselli/WebDevEssentials',
      images: [
        'path/to/image16.jpg',
        'path/to/image17.jpg',
        'path/to/image18.jpg',
      ],
    },
    {
      id: 7,
      imageUrl:
        'https://ih1.redbubble.net/image.2480982209.7657/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      title: '....',
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
        'path/to/image19.jpg',
        'path/to/image20.jpg',
        'path/to/image21.jpg',
      ],
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
