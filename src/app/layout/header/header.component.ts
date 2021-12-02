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
  lbl_btn_search = 'Cari';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initAction();
  }

  initAction() {
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

    if (localStorage.getItem('theme') == 'dark') {
      that.setDarkData();
    } else {
      that.setLightData();
    }

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
      $('#input-search').focus();
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
    this.lbl_btn_search = 'Search';
  }

  setID() {
    this.lbl_partner = 'Rekanan';
    this.lbl_product = 'Produk';
    this.lbl_about = 'Tentang Kami';
    this.lbl_contact = 'Kontak';
    this.lbl_btn_search = 'Cari';
  }

  searchEnter(event: any) {
    if (!event.shiftKey && (event.key === "Enter" || event.key === "Tab")) {
      event.preventDefault();
      this.search();
    }
  }

  search() {
    if (this.keyword) {
      switch (this.keyword.toLowerCase()) {
        case 'partner':
          this.router.navigate(['/partner']);
          break;
        case 'rekanan':
          this.router.navigate(['/partner']);
          break;
        case 'product':
          this.router.navigate(['/product']);
          break;
        case 'produk':
          this.router.navigate(['/product']);
          break;
        case 'about':
          this.router.navigate(['/about']);
          break;
        case 'tentang kami':
          this.router.navigate(['/about']);
          break;
        case 'contact':
          this.router.navigate(['/contact']);
          break;
        case 'kontak':
          this.router.navigate(['/contact']);
          break;
      }
    }
  }

  setDarkData() {
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
    $('#first-slide').prop('src', '../../../assets/image/office dark.webp');
    $('#second-slide').prop('src', '../../../assets/image/receptionist dark.webp');
    $('#third-slide').prop('src', '../../../assets/image/workshop 2 dark.webp');
    $('#products').css('background-color', '#1B262C');

    const divs = document.querySelectorAll('.card');
    for (let i = 0; i < divs.length; ++i) {
      $(divs[i]).addClass('card-dark');
    }
  }

  setLightData() {
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
    $('#first-slide').prop('src', '../../../assets/image/office light.webp');
    $('#second-slide').prop('src', '../../../assets/image/receptionist light.webp');
    $('#third-slide').prop('src', '../../../assets/image/workshop 2 light.webp');
    $('#products').css('background-color', '#fff');

    const divs = document.querySelectorAll('.card');
    for (let i = 0; i < divs.length; ++i) {
      $(divs[i]).removeClass('card-dark');
    }
  }

  darkMode(id: string) {
    if (id === 'dark') {
      localStorage.setItem('theme', 'dark');
      this.setDarkData();
    } else {
      localStorage.setItem('theme', 'light');
      this.setLightData();
    }
  }
}
