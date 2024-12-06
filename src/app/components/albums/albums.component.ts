import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

}
