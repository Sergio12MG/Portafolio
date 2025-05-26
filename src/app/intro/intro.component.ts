import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [StyleClassModule, RippleModule, RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
