import { Component, OnInit } from '@angular/core';

export { AppComponent };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
class AppComponent implements OnInit
{
  title = 'modules-routing';

  constructor()
  {
    // This app.component constructor will be called before any child-class constructors
    // and will run before DOM is ready.
  }

  ngOnInit(): void
  {
    // Handle any additional initialisation tasks here (will run after DOM is ready).
    console.log('init done');
  }
}
