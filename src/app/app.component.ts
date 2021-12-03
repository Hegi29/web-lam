import { Component } from '@angular/core';

import { APP_TITLE } from './common/constants';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_TITLE;
}
