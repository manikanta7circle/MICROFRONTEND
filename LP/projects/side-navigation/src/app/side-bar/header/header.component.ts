import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public sendMessage() {
    const event = new CustomEvent('eventFromNavigation', {detail: 'Hi i am event from navigation!'});
    dispatchEvent(event)
  }
}
