import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // const that = this;
    // $('.card').click(function () {
    //   that.router.navigate(['/product']);
    // });
  }

  redirectTo(id: string) {
    this.router.navigate([`/product/${id}`]);
  }
}
