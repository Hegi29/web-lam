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

  darkMode(id: string) {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (id === 'dark') {
      $('#dark').addClass('d-none');
      $('#light').removeClass('d-none');
      $('#container-header').removeClass('container-header-light');
      $('#container-header').addClass('container-header-dark');
      $('#slider-lang').addClass('slider-dark');
      $('#slider-lang').removeClass('slider');
      $('#row-1').addClass('dark-bg');
      $('#row-2').addClass('dark-bg');
      $('#row-3').addClass('dark-bg');
      $('#bottom-1').addClass('bottom-left-dark');
      $('#bottom-1').removeClass('bottom-left');
      $('#bottom-2').addClass('bottom-left-dark');
      $('#bottom-2').removeClass('bottom-left');
      $('#bottom-3').addClass('bottom-left-dark');
      $('#bottom-3').removeClass('bottom-left');
      $('#home').prop('src', '../../../assets/image/logo LAM dark.jpeg');
      $('#first-slide').prop('src', '../../../assets/image/office.png');
      $('#second-slide').prop('src', '../../../assets/image/receptionist.png');
      $('#third-slide').prop('src', '../../../assets/image/workshop 2.png');
      $('#products').css('background-color', '#1B262C');
    } else {
      $('#dark').removeClass('d-none');
      $('#light').addClass('d-none');
      $('#container-header').addClass('container-header-light');
      $('#container-header').removeClass('container-header-dark');
      $('#slider-lang').removeClass('slider-dark');
      $('#slider-lang').addClass('slider');
      $('#row-1').removeClass('dark-bg');
      $('#row-2').removeClass('dark-bg');
      $('#row-3').removeClass('dark-bg');
      $('#bottom-1').removeClass('bottom-left-dark');
      $('#bottom-1').addClass('bottom-left');
      $('#bottom-2').removeClass('bottom-left-dark');
      $('#bottom-2').addClass('bottom-left');
      $('#bottom-3').removeClass('bottom-left-dark');
      $('#bottom-3').addClass('bottom-left');
      $('#home').prop('src', '../../../assets/image/logo LAM.png');
      $('#first-slide').prop('src', '../../../assets/image/office 2.jpg');
      $('#second-slide').prop('src', '../../../assets/image/receptionist_2.jpg');
      $('#third-slide').prop('src', '../../../assets/image/workshop 2_2.jpg');
      $('#products').css('background-color', '#fff');
    }
  }
}
