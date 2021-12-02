import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText = "Hak Cipta © 2021 PT. Laksana Abadi Mandiri. Hak cipta dilindungi undang-undang.";
  lang = 'id';

  constructor() { }

  ngOnInit(): void {
    this.initAction();
  }

  initAction() {
    const that = this;

    if (localStorage.getItem('lang') == 'en') {
      that.setEN();
      $("#switch-lang").prop('checked', true);
      $('#id-flag').addClass('d-none');
      $('#uk-flag').removeClass('d-none');
    } else {
      $("#switch-lang").prop('checked', false);
      $('#id-flag').removeClass('d-none');
      $('#uk-flag').addClass('d-none');
      that.setID();
    }

    $('#switch-lang').change(function () {
      if ($('#switch-lang').is(":checked")) {
        localStorage.setItem('lang', 'en');
        that.setEN();
        $('#id-flag').addClass('d-none');
        $('#uk-flag').removeClass('d-none');
        return;
      }

      localStorage.setItem('lang', 'id');
      that.setID();
      $('#id-flag').removeClass('d-none');
      $('#uk-flag').addClass('d-none');
    });
  }

  setEN() {
    localStorage.setItem('lang', 'en');
    this.lang = 'en';
    $('#id-flag').addClass('d-none');
    $('#uk-flag').removeClass('d-none');
    this.footerText = 'Copyright © 2021 PT. Laksana Abadi Mandiri. Copyright protected by law.';
  }

  setID() {
    localStorage.setItem('lang', 'id');
    this.lang = 'id';
    $('#id-flag').removeClass('d-none');
    $('#uk-flag').addClass('d-none');
    this.footerText = 'Hak Cipta © 2021 PT. Laksana Abadi Mandiri. Hak cipta dilindungi undang-undang.';
  }

}
