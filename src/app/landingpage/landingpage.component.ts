import { Component } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-landingpage',
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {
  ngOnInit(): void {
    // Example animation
    gsap.to('.box', { x: 100, duration: 2 });
  }
}
