import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
// import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-pagos',
  templateUrl: 'pagos.page.html',
  styleUrls: ['pagos.page.scss']
})
export class PagosPage implements OnInit {
  items: String[] = [];

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    // setTimeout(() => {
    //   // this.showLoading()
    //   for (let i = 1; i < 51; i++) {
    //     this.items.push(`Item ${i}`);
    //   }
    // }, 2000);
  }

  async showLoading() {
    this.items = []
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
    });

    loading.present();
    setTimeout(async () => {
      for (let i = 1; i < 51; i++) {
        this.items.push(`Item ${i}`);
      }
      loading.dismiss()
    }, 2000);


  }



}
