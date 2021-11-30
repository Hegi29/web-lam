import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.setDark();
    } else {
      this.setLight();
    }
  }

  redirectTo(id: string) {
    this.router.navigate([`/product/${id}`]);
  }

  setDark() {
    const divs = document.querySelectorAll('.card');
    for (let i = 0; i < divs.length; ++i) {
      $(divs[i]).addClass('card-dark');
    }
  }

  setLight() {
    const divs = document.querySelectorAll('.card');
    for (let i = 0; i < divs.length; ++i) {
      $(divs[i]).removeClass('card-dark');
    }
  }
}
