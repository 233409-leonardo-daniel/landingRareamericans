import { Component } from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { SongsComponent } from '../songs/songs.component';
import { StoriesComponent } from '../stories/stories.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AlbumsComponent, SongsComponent, StoriesComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
