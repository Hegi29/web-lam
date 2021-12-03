import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  options: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/datafiles/9O2lZQumO6pADBN/data.json',
  };

  mybutton: any;

  constructor() { window.scrollTo(0, 0) }

  ngOnInit(): void {
    this.mybutton = document.getElementById("myBtn");
    window.onscroll = () => { this.scrollFunction() };
  }

  scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
