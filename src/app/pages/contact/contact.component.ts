import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lang = 'id';
  lbl_office = 'Kantor';
  office = 'Ruko Gunung Batu Kavling no. 15 Bandung 40175';
  lbl_warehouse = 'Gudang';
  warehouse = 'Ruko Gunung Batu Kavling no. 1 Bandung 40175';
  lbl_telpfax = 'Telp/Faks';
  telephone = 'Tlp. (62-22) 6127023/24';
  fax = 'Fax. (62-22) 6018196';
  lbl_email = 'Email';
  email = 'laksanaabadi3@gmail.com';
  lbl_message = 'Pesan';
  lbl_send = 'Kirim';

  constructor() { window.scrollTo(0, 0); }

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
    this.lang = 'en';
    this.lbl_office = 'Office';
    this.lbl_warehouse = 'Warehouse';
    this.lbl_telpfax = 'Telp/Fax';
    this.lbl_email = 'Email';
    this.lbl_message = 'Message';
    this.lbl_send = 'Send';
  }

  setID() {
    this.lang = 'id';
    this.lbl_office = 'Kantor';
    this.lbl_warehouse = 'Gudang';
    this.lbl_telpfax = 'Telp/Faks';
    this.lbl_email = 'Surel';
    this.lbl_message = 'Pesan';
    this.lbl_send = 'Kirim';
  }
}
