import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  message = '';

  ngOnInit(): void {
    this.load()
    fromEvent(window, 'eventFromFacultyApp').subscribe((event: any) => {
      console.log(event)
      this.message = event.detail
    })
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      remoteEntry: 'http://localhost:4400/remoteEntry.js',
      remoteName: "sideNavigation",
      exposedModule: "./SideBarComponent"
    })
    console.log(m);
    const ref = this.viewContainer.createComponent(m.SideBarComponent);
    console.log(ref)

  }
}
