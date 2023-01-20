import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent {
  constructor(private router: ActivatedRoute, private http: HttpClient) {}
  datas: any[] = [];
  mainProduct: any = {};
  ngOnInit() {
    this.getMainProduct();
  }

  private getMainProduct() {
    this.http
      .get(
        'https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct.json'
      )
      .subscribe((res) => {
        this.datas = Object.entries(res);
        let mainProductId = this.router.snapshot.params['id'];
        let mainProductfind = this.datas.find(
          (Pro) => Pro[1].id === +mainProductId
        );

        this.mainProduct = mainProductfind[1];
      });
  }
}
