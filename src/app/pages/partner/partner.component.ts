import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(id: string) {
    const url = this.getUrl(id);
    if (url) {
      window.open(url);
    }
  }

  getUrl(id: string) {
    switch (id) {
      case 'arkray':
        return 'https://www.arkray.id/english/index.html';
      case 'audicom':
        return 'http://audicom.cn/en/';
      case 'diamond':
        return 'https://www.diamonddiagnostics.com/';
      case 'labnova':
        return 'http://www.labnovation.com/';
      case 'mindray':
        return 'https://www.mindray.com/en/';
      case 'mrk':
        return 'http://www.mrk-diagnostics.com/';
      case 'sms':
        return 'http://www.sms-pt.com/';
      case 'elitech':
        return 'https://www.elitechgroup.com/';
      case 'socorex':
        return 'https://www.socorex.com/en/';
      case 'radiometer':
        return 'https://www.radiometer.com/';
      default:
        return '';
    }
  }
}
