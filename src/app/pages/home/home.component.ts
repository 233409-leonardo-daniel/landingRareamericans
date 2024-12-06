import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DetailsComponent } from '../../components/details/details.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DetailsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
