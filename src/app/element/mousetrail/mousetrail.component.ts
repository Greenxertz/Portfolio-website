import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mousetrail',
  standalone: true,
  imports: [],
  templateUrl: './mousetrail.component.html',
  styleUrl: './mousetrail.component.css',
})
export class MousetrailComponent implements AfterViewInit {
  points: { x: number; y: number }[] = [];
  segments = 100;
  mouse = { x: 0, y: 0 };
  svg!: SVGElement;
  path!: SVGPathElement;

  ngAfterViewInit() {
    this.svg = document.querySelector('svg.trail') as SVGElement;
    this.path = this.svg.querySelector('path') as SVGPathElement;

    this.initPoints();
    this.anim();
    this.resize();
  }

  initPoints() {
    for (let i = 0; i < this.segments; i++) {
      this.points.push({ x: this.mouse.x, y: this.mouse.y });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    this.mouse.x = x;
    this.mouse.y = y;

    if (this.points.length === 0) {
      this.initPoints();
    }
  }

  anim() {
    let px = this.mouse.x;
    let py = this.mouse.y;

    this.points.forEach((p, index) => {
      p.x = px;
      p.y = py;

      const n = this.points[index + 1];

      if (n) {
        px -= (p.x - n.x) * 0.15;
        py -= (p.y - n.y) * 0.15;
      }
    });

    this.path.setAttribute(
      'd',
      `M ${this.points.map((p) => `${p.x} ${p.y}`).join(' L ')}`
    );

    requestAnimationFrame(() => this.anim());
  }

  @HostListener('window:resize')
  resize() {
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    this.svg.style.width = `${ww}px`;
    this.svg.style.height = `${wh}px`;
    this.svg.setAttribute('viewBox', `0 0 ${ww} ${wh}`);
  }
}
