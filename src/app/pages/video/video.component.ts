import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [FooterComponent, NgFor, HeaderComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videos = [
    {
      src: 'assets/Rare Americans - Brittle Bones Nicky 2 (Official Video) - Rare Americans (1080p, h264, youtube).mp4',
      title: 'Rare Americans - Brittle Bones Nicky 2 (Official Video)',
    },
    {
      src: 'assets/Rare Americans - Brittle Bones Nicky 3 (Official Music Video) - Rare Americans (1080p, h264, youtube).mp4',
      title: 'Rare Americans - Brittle Bones Nicky 3 (Official Music Video)',
    },
  ];

}
