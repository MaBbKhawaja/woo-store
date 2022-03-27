import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public rest: RestService) {
    this.rest.getProducts(1).then(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
