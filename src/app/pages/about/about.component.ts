import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AnimationOptions } from 'ngx-lottie';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  options: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/datafiles/9O2lZQumO6pADBN/data.json',
  };

  mybutton: any;
  lbl_vision_title = 'VISI';
  lbl_mission_title = 'MISI';
  lang = 'id';
  lbl_history_title = 'SEJARAH PERUSAHAAN';
  milestone_1_1 = 'Februari - CV. Laksana Abadi didirikan';
  milestone_1_1_en = 'February - CV. Laksana Abadi established';
  milestone_1_2 = 'Maret - Keagenan reagent bioMerieux dan blood gas analyzer radiometer';
  milestone_1_2_en = 'March - Agency reagent bioMerieux dan blood gas analyzer radiometer';
  milestone_2 = 'Mei - Memulai kerja sama operasional penempatan alat hematology';
  milestone_2_en = 'May - Starting cooperation operational placement hematology tools';
  milestone_3 = 'April - LIS Vanslab mulai dipasarkan';
  milestone_3_en = 'April - LIS Vanslab start to market';
  milestone_4 = 'Maret - Berubah status badan hukum menjadi PT. dengan nama PT. Laksana Abadi Mandiri';
  milestone_4_en = 'March - Changed legal entity status to PT. with name PT. Laksana Abadi Mandiri';
  milestone_5 = 'Desember - Mendapatkan kontrak kebutuhan alat electrolyte, urine, dan alat microbiologi vitekbioMerieux-France di RSHS Bandung';
  milestone_5_en = 'December - Get a contract for the need for electrolyte, urine, and microbiology vitekbioMerieux-France equipment in RSHS Bandung';
  milestone_6 = 'Mei - Keagenan auto analyzer vital scientific';
  milestone_6_en = 'May - Vital scientific auto analyzer agency';
  milestone_7 = 'Juni - KSO di RSUD Garut 90% pem lab.';
  milestone_7_en = 'June - Operational cooperation in Garut, 90% of laboratory examinations';
  milestone_8_1 = 'Juli - KSO alat elektrolit, kimia imun, mikro, LED, agregasi di RSHS 70% pem lab.';
  milestone_8_1_en = 'July - Operational cooperation of electrolytic equipment, immune chemistry, micro, LED, aggregation in RSHS, 70% of laboratory examinations';
  milestone_8_2 = 'Desember - Retur penjualan Rp 28.750.565.6000,-';
  milestone_8_2_en = 'December - Sales return Rp 28.750.565.6000,-';
  desc_company = `Izin PAK Terbaru : HK.07.alkes/IV/593/AK.3.2010.
  Khusus penyediaan alat dan peralatan Laboratorium Klinik ; AGD dan Electrolyte,
  Auto Analyzer, Immunology, Hematology termasuk reagen dan QC, Software LIS.
  didukung oleh tim Teknisi dan Aplikasi handal.`;
  desc_company_en = `Latest medical device distributor license : HK.07.alkes/IV/593/AK.3.2010.
  Special providers of clinical laboratory equipment; AGD and Electrolyte,
  Autoanalyzer, Immunology, Hematology including reagents and QC, LIS Software.
  Supported by team of reliable Technicians and Applications.`;
  vision = 'Menjadi perusahaan penyalur Alkes terdepan di indonesia.';
  vision_en = 'Become the leading medical equipment distribution company in Indonesia';
  mission = `Menyediakan produk alat Kesehatan yang modern, berstandar Internasional
  sesuai
  dengan perkembangan
  ilmu
  pengetahuan sebagai
  kontribusi untuk peningkatan mutu hasil pemeriksaan laboratorium kesehatan di indonesia.`;
  mission_en = `Providing modern medical device products, with international standards
  according to the development of science as a contribution to improving the quality of health laboratory examination results in Indonesia.`;

  constructor() {
    window.scrollTo(0, 0);
    window.onscroll = () => { this.scrollFunction() };
  }

  ngOnInit(): void {
    AOS.init();
    this.initAction();
  }

  initAction() {
    this.mybutton = document.getElementById("myBtn2");

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

    $('#receptionist').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#receptionist').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/receptionist.webp");
    });

    $('#workshop1').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#workshop1').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/workshop 1.webp");
    });

    $('#workshop2').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#workshop2').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/workshop 2.webp");
    });

    $('#workshop3').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#workshop3').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/workshop 3.webp");
    });

    $('#warehouse').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#warehouse').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/warehouse.webp");
    });

    $('#office').click(function () {
      $('#receptionist').removeClass('active');
      $('#workshop1').removeClass('active');
      $('#workshop2').removeClass('active');
      $('#workshop3').removeClass('active');
      $('#warehouse').removeClass('active');
      $('#office').removeClass('active');

      $('#office').addClass('active');
      $('#main-about-img').prop("src", "../../../assets/image/office.webp");
    });

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
  }

  setEN() {
    this.lang = 'en';
    this.lbl_vision_title = 'VISION';
    this.lbl_mission_title = 'MISSION';
    this.lbl_history_title = 'COMPANY HISTORY';
  }

  setID() {
    this.lang = 'id';
    this.lbl_vision_title = 'VISI';
    this.lbl_mission_title = 'MISI';
    this.lbl_history_title = 'SEJARAH PERUSAHAAN';
  }

  scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.mybutton.style.display = "block";
      return;
    }

    this.mybutton.style.display = "none";
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
