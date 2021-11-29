import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  desc_company = `Khusus penyediaan alat dan peralatan Laboratorium Klinik ; AGD dan Electrolyte,
  Auto Analyzer, Immunology, Hematology termasuk reagen dan QC, Software LIS.`;
  // didukung oleh tim Teknisi dan Aplikasi handal.`;
  desc_company_en = `Special providers of clinical laboratory equipment ; AGD and Electrolyte,
  Autoanalyzer, Immunology, Hematology including reagents and QC, LIS Software.`;
  // Supported by team of reliable Technicians and Applications.`;
  lang = 'id';

  constructor() { }

  ngOnInit(): void {
    const that = this;

    if (localStorage.getItem('lang') == 'en') {
      that.lang = 'en';
      $("#switch-lang").prop('checked', true);
      $('#id-flag').addClass('d-none');
      $('#uk-flag').removeClass('d-none');
    } else {
      $("#switch-lang").prop('checked', false);
      $('#id-flag').removeClass('d-none');
      $('#uk-flag').addClass('d-none');
      that.lang = 'id';
    }

    $('#switch-lang').change(function () {
      if ($('#switch-lang').is(":checked")) {
        localStorage.setItem('lang', 'en');
        that.lang = 'en';
        $('#id-flag').addClass('d-none');
        $('#uk-flag').removeClass('d-none');
        return;
      }

      localStorage.setItem('lang', 'id');
      that.lang = 'id';
      $('#id-flag').removeClass('d-none');
      $('#uk-flag').addClass('d-none');
    });

  }
}
