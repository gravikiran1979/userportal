import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular6 with SpringBoot App';
  router: Router;

  constructor(private grouter: Router) { 
    this.router = grouter;
  }

  onSearch(emailIdInput) {
    console.log("Clicked Search button with "+emailIdInput.value);
    this.router.navigateByUrl('/search', emailIdInput.value);
  }
}
