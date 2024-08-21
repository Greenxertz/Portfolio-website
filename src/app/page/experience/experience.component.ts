import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  steps = [
    {
      id: '1',
      label: 'Beatrix events',
      image: '/Images/work/beatrix/beatrixevents.png',
      date: '2022-2023',
      title: 'Beatrix events',
      content: `At Beatrix Events, from April 2022 to October 2023,
       I embraced diverse roles across various events, each presenting 
       unique challenges and opportunities. As a waiter, I provided 
       exceptional service by catering to guests and went above and 
       beyond by managing stock to ensure smooth operations. For other 
       events, I took on the roles of Amazing Race station challenge 
       coordinator, competition spokesperson, and receptionist, adapting 
       my skills to meet the specific needs of each occasion. My 
       commitment to excellence and proactive approach in each role 
       ensured that every guest left with exceptional satisfaction.`,
    },
    {
      id: '2',
      label: 'FreeForm Rings',
      image: '/Images/work/freeform/freeformrings.png',
      date: '2022',
      title: 'FreeForm Rings',
      content: `At FreeForm Rings, from April 2022 to July 2022, 
      I excelled in my role as a salesperson by effectively upselling 
      and managing customer relationships without being forceful. I 
      actively engaged with customers at various events focused on fitness 
      and sports, as well as at occasional farm stalls, to identify and meet 
      their needs. My responsibilities included setting up the sales booth 
      and managing stock for some events, and I even took initiative by 
      keeping the setup items with me as needed. This proactive approach not 
      only contributed to achieving high sales targets but also ensured a 
      seamless and professional presentation of our products.`,
    },
    {
      id: '3',
      label: 'Off The Grid Restaurant',
      image: '/Images/work/otg/otg.png',
      date: '2019',
      title: 'Off The Grid Restaurant',
      content: `At Off The Grid Restaurant in December 2019, I worked as a 
      bartender and took on additional responsibilities to ensure the success 
      of our events. I coordinated event setups, managed bar stock, and 
      promoted events through targeted advertisements to maximize attendance. 
      My role also involved maintaining high service quality and organizing 
      the work environment to provide a seamless experience for guests. My 
      proactive approach and attention to detail helped enhance the overall 
      efficiency of the bar and the success of the events we hosted.`,
    },
  ];

  progressHeight = 3;
  activeSection = '1';
  heightCalc = 100 / this.steps.length;

  setProgress(section: string) {
    this.activeSection = section;
    const sectionIndex = this.steps.findIndex((step) => step.id === section);
    this.progressHeight = (sectionIndex / (this.steps.length - 1)) * 100;
    if (this.progressHeight === 0) this.progressHeight = 3;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
   
    const isAtTop = window.scrollY === 0;

    if (!isAtTop) {
      return; 
    }

    const currentIndex = this.steps.findIndex(
      (step) => step.id === this.activeSection
    );

 
    if (currentIndex === 0 && event.deltaY < 0) {
      return; 
    }
    if (currentIndex === this.steps.length - 1 && event.deltaY > 0) {
      return; 
    }

    event.preventDefault(); 
    const delta = Math.sign(event.deltaY);
    const nextIndex = Math.min(
      Math.max(currentIndex + delta, 0),
      this.steps.length - 1
    );

    if (nextIndex !== currentIndex) {
      const nextStep = this.steps[nextIndex];
      this.setProgress(nextStep.id);
    }
  }
}
