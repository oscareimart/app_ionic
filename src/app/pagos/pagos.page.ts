import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { data } from '../services/database';


@Component({
  selector: 'app-pagos',
  templateUrl: 'pagos.page.html',
  styleUrls: ['pagos.page.scss']
})
export class PagosPage implements OnInit {
  constructor(
    private loadingCtrl: LoadingController,
  ) { }

  clients: any[] = []
  client: any
  isModalOpen = false;

  ngOnInit() {
  }

  getPageDetail(client: any) {
    this.setOpen(true)
    this.client = client
    console.log(client);

  }

  setOpen(isModalOpen: boolean) {
    console.log(isModalOpen);

    this.isModalOpen = isModalOpen;
  }

  async findClients() {
    this.clients = []
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
    });
    loading.present();
    setTimeout(() => {
      this.clients = data.data//set values
      loading.dismiss()
    }, 2000);
  }

}
