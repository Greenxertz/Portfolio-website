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
      summary: `A game where users guess songs using Spotify's API.`,
      desc: `This project focuses on learning new concepts such as HTTP requests and utilizing APIs, 
      specifically Spotify's API. It includes custom button creation within C# and explores the integration 
      of Node.js and Docker. Through this project, I gained significant experience in using APIs and 
      advanced my skills in backend development.`,
      chips: [
        'devicon-csharp-plain',
        'fa-solid fa-gear',
        'devicon-docker-plain',
      ],
      projectUrls: ['https://github.com/Greenxertz/guessing-game'],
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
      summary:
        'An ecommerce website project built with a focus on full-stack development.',
      desc: `An ecommerce website developed as a final project for one of my classes in June 2024.
       The goal was to create a vanilla site without any extensions. The website utilizes a MariaDB 
       database hosted within PHPMyAdmin, with PHP handling database requests. This project provided 
       valuable experience in full-stack web development.`,
      chips: [
        'devicon-php-plain',
        'devicon-mysql-plain-wordmark',
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
      ],
      projectUrls: [
        'https://github.com/Greenxertz/Tukkiestools',
        'https://tukkiestools.greenxertz.co.za/',
      ],
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
      summary:
        'A single-page Angular website showcasing my projects and capabilities.',
      desc: `This portfolio website showcases my past projects and capabilities. It is built with 
      Angular to ensure quick loading times and a seamless single-page experience. The purpose of 
      this project is to provide a professional presentation of my work and skills.`,
      chips: [
        'devicon-css3-plain-wordmark',
        'devicon-javascript-plain',
        'devicon-html5-plain-wordmark',
        'devicon-angularmaterial-plain',
        'devicon-angular-plain',
      ],
      projectUrls: ['https://github.com/Greenxertz/Portfolio-website'],
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
      summary:
        'An open-source GitHub repository compiling essential web development resources.',
      desc: `WebDevEssentials is a GitHub repository created in collaboration with a friend to compile 
      useful libraries and resources for web development. The repository aims to serve as a central hub 
      for developers, particularly those new to web development, by providing access to essential tools 
      and libraries.`,
      chips: [],
      projectUrls: ['https://github.com/Dario-Maselli/WebDevEssentials'],
      images: ['/Images/Pictures/projects/webessentials/repo.png'],
    },
    {
      id: 5,
      imageUrl: '/Images/Pictures/projects/SAOnlinemart/homepage.png',
      title: 'SA Online Mart',
      summary:
        'An Ecommerce web app built with the focus on the ASP .Net Framework.',
      desc: `An ecommerce web app developed as a project for one of my classes in september 2024.
       The goal of this project was to be completed within a week to see what students were capable of.
       This project provided valuable experience in development within the ASP .net Framework.`,
      chips: [
        'devicon-dotnetcore-plain',
        'devicon-azuresqldatabase-plain',
        'devicon-html5-plain-wordmark',
        'devicon-bootstrap-plain',
      ],
      projectUrls: ['https://github.com/Greenxertz/SAOnlineProject1'],
      images: [
        '/Images/Pictures/projects/SAOnlinemart/homepage.png',
        '/Images/Pictures/projects/SAOnlinemart/details.png',
        '/Images/Pictures/projects/SAOnlinemart/Productdetails.png',
        '/Images/Pictures/projects/SAOnlinemart/cart.png',
      ],
    },
  ];

  private prototypes = [
    {
      id: 6,
      imageUrl: '/Images/Pictures/underconstruction.jpg',
      title: 'Solid state management app',
      summary:
        'A student and time management application designed to help tutors efficiently manage their schedules.',
      desc: `Currently in the research phase, this project aims to develop a student and time management
       application designed to help tutors manage their schedules more efficiently. The app will allow 
       tutors to reorganize their schedules in case of student rescheduling, showcase available times, 
       and track the number of remaining lessons based on the pricing plan`,
      chips: [],
      projectUrls: [],
      images: ['/Images/Pictures/underconstruction.jpg'],
    },
    {
      id: 7,
      imageUrl: '/Images/Pictures/underconstruction.jpg',
      title: 'Solid state website',
      summary:
        'The main website for Solid State Academy, currently in the planning phase.',
      desc: `This project, currently in the planning phase, will serve as the main website for Solid 
      State Academy. The goal is to create a professional and user-friendly platform that effectively 
      represents the academy's offerings and services. `,
      chips: [],
      projectUrls: [],
      images: ['/Images/Pictures/underconstruction.jpg'],
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
