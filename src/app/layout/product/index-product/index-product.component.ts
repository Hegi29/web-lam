import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {
  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.handleClick();

    const params = window.location.pathname;
    switch (params) {
      case '/product/blood-gas-analyzer-siemens':
        $('#link-blood-products').trigger('click');
        break;
      case '/product/electrolyte-analyzer-audicom':
        $('#link-electrolyte-products').trigger('click');
        break;
      case '/product/electrolyte-analyzer-avl':
        $('#link-electrolyte-products').trigger('click');
        break;
      case '/product/hematology-analyzer':
        $('#link-hematologi-products').trigger('click');
        break;
      case '/product/hemostasis-analyzer':
        $('#link-hemostasis-products').trigger('click');
        break;
      case '/product/immunology-analyzer':
        $('#link-immunology-products').trigger('click');
        break;
      case '/product/urine-analyzer':
        $('#link-urine-products').trigger('click');
        break;
      case '/product/urine-analyzer-cobio':
        $('#link-urine-products').trigger('click');
        break;
    }
  }

  goTo(id: string) {
    switch (id) {
      case '/product/blood-gas-analyzer-siemens':
        $('#link-blood-products').trigger('click');
        break;
      case '/product/electrolyte-analyzer-audicom':
        $('#link-electrolyte-products').trigger('click');
        break;
      case '/product/electrolyte-analyzer-avl':
        $('#link-electrolyte-products').trigger('click');
        break;
      case '/product/hematology-analyzer':
        $('#link-hematologi-products').trigger('click');
        break;
      case '/product/hemostasis-analyzer':
        $('#link-hemostasis-products').trigger('click');
        break;
      case '/product/immunology-analyzer':
        $('#link-immunology-products').trigger('click');
        break;
      case '/product/urine-analyzer':
        $('#link-urine-products').trigger('click');
        break;
      case '/product/urine-analyzer-cobio':
        $('#link-urine-products').trigger('click');
        break;
    }
  }

  handleClick() {
    $('#link-all-products').click(function () {
      window.history.pushState('', '', '/product');

      $('#link-all-products').addClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').removeClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-blood-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').addClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').removeClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-electrolyte-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').addClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').removeClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-hematologi-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').addClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').removeClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-hemostasis-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').addClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').removeClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-immunology-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').addClass('active');
      $('#link-urine-products').removeClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').removeClass('d-none');
      $('#urine-analyzer-products').addClass('d-none');
    });

    $('#link-urine-products').click(function () {
      $('#link-all-products').removeClass('active');
      $('#link-blood-products').removeClass('active');
      $('#link-electrolyte-products').removeClass('active');
      $('#link-hematologi-products').removeClass('active');
      $('#link-hemostasis-products').removeClass('active');
      $('#link-immunology-products').removeClass('active');
      $('#link-urine-products').addClass('active');

      $('#all-products').addClass('d-none');
      $('#blood-gas-analyzer-products').addClass('d-none');
      $('#electrolite-analyzer-products').addClass('d-none');
      $('#hematology-analyzer-products').addClass('d-none');
      $('#hemostatis-analyzer-products').addClass('d-none');
      $('#immunology-analyzer-products').addClass('d-none');
      $('#urine-analyzer-products').removeClass('d-none');
    });
  }
}
