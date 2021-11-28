import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyword = '';
  lang = 'id';
  lbl_partner = 'Rekanan';
  lbl_product = 'Produk';
  lbl_about = 'Tentang Kami';
  lbl_contact = 'Kontak';

  constructor(private router: Router) { }

  ngOnInit(): void {
    let route = window.location.pathname;

    if (route.includes('product')) {
      route = '/product';
    }

    switch (route) {
      case '/partner':
        $('#link-partner').addClass('text-red-lam');
        $('#link-product').removeClass('text-red-lam');
        $('#link-about').removeClass('text-red-lam');
        $('#link-contact').removeClass('text-red-lam');
        break;
      case '/product':
        $('#link-partner').removeClass('text-red-lam');
        $('#link-product').addClass('text-red-lam');
        $('#link-about').removeClass('text-red-lam');
        $('#link-contact').removeClass('text-red-lam');
        break;
      case '/about':
        $('#link-partner').removeClass('text-red-lam');
        $('#link-product').removeClass('text-red-lam');
        $('#link-about').addClass('text-red-lam');
        $('#link-contact').removeClass('text-red-lam');
        break;
      case '/contact':
        $('#link-partner').removeClass('text-red-lam');
        $('#link-product').removeClass('text-red-lam');
        $('#link-about').removeClass('text-red-lam');
        $('#link-contact').addClass('text-red-lam');
        break;
    }

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
        that.lang = 'en';
        $('#id-flag').addClass('d-none');
        $('#uk-flag').removeClass('d-none');
        that.setEN();
        return;
      }

      localStorage.setItem('lang', 'id');
      that.setID();
      $('#id-flag').removeClass('d-none');
      $('#uk-flag').addClass('d-none');
    });

    $('#search').click(function () {
      $('.dropdown-content').show();
      $('#search').addClass('d-none');
      $('#close').removeClass('d-none');
    });

    $('#close').click(function () {
      that.keyword = '';
      $('.dropdown-content').hide();
      $('#search').removeClass('d-none');
      $('#close').addClass('d-none');
    });
  }

  home() {
    this.router.navigate(['/']);
    window.scrollTo(0, 0)
  }

  partner() {
    this.router.navigate(['/partner']);
  }

  product() {
    this.router.navigate(['/product']);
  }

  about() {
    this.router.navigate(['/about']);
  }

  contact() {
    this.router.navigate(['/contact']);
  }

  setEN() {
    this.lbl_partner = 'Partner';
    this.lbl_product = 'Product';
    this.lbl_about = 'About Us';
    this.lbl_contact = 'Contact';
  }

  setID() {
    this.lbl_partner = 'Rekanan';
    this.lbl_product = 'Produk';
    this.lbl_about = 'Tentang Kami';
    this.lbl_contact = 'Kontak';
  }
}
