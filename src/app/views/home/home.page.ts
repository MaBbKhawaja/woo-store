import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked {

  @ViewChild('swiper') swiper: SwiperComponent;

  constructor(public rest: RestService) {
    this.rest.getProducts(1).then(res => {
      console.log(res);
    });
  }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

}
