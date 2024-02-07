import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  onYesButtonClickHandler() {
    window.location.href = 'https://www.youtube.com/shorts/kQyCp9zOBk4';
  }

  onNoButtonclickHandler() {
    window.location.href = 'https://www.youtube.com/shorts/Vx_XlAWl97g';
  }
}

