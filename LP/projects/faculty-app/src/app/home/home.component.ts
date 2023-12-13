import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  message = '';

  ngOnInit() {
    fromEvent(window, 'eventFromNavigation').subscribe((event: any) => {
      console.log(event)
      this.message = event.detail
    })
  }

  public sendMessage() {
    const event = new CustomEvent('eventFromFacultyApp', {detail: 'Hi I am event from faculty-app'});
    dispatchEvent(event)
  }
}
