import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.component.html',
  styleUrls: ['./home-shop.component.css'],
})
export class HomeShopComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit(): void {}
}
