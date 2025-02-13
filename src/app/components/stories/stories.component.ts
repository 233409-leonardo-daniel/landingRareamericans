import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  videos = [
    { src: 'assets/video1.jpeg', title: 'Berlín' },
    { src: 'assets/video2.jpeg', title: 'Brittle Bones Nicky' },
    { src: 'assets/video3.jpeg', title: 'Run The World' },
  ];

}
