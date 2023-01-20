import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-proposal-product',
  templateUrl: './admin-proposal-product.component.html',
  styleUrls: ['./admin-proposal-product.component.css'],
})
export class AdminProposalProductComponent {
  datas: any[] = [];
  showModal: boolean = false;
  showCratProductForm: boolean = false;
  openCreatProductForm: boolean = false;
  showUpdateProductForm: boolean = false;
  creatnewProductData: any = {};
  updateProductData: any = {};
  productDeleteId: string = '';
  productUpdateId: string = '';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.dataGET();
  }

  public onOpenFormCreatproductHandler() {
    this.showCratProductForm = true;
  }
  public onCreatproductHandler() {
    this.showCratProductForm = false;
    this.creatnewProductData.counter = 0;
    this.creatnewProductData.id = Math.floor(Math.random() * 10000);
    this.datasPOST();
    this.resetDataobj();
  }
  public onCanselCreatproductHandler() {
    this.showCratProductForm = false;
  }
  public resetDataobj() {
    this.creatnewProductData = {};
  }
  public dataGET() {
    this.http
      .get(
        'https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct.json'
      )
      .subscribe((res) => {
        this.datas = Object.entries(res);
        console.log(this.datas);
      });
  }

  public datasPOST() {
    this.http
      .post(
        'https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct.json',
        this.creatnewProductData
      )
      .subscribe((res) => {
        console.log(res);
        this.dataGET();
      });
  }

  public dataDELETE() {
    console.log(this.productDeleteId);

    this.http
      .delete(
        `https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct/${this.productDeleteId}.json`
      )
      .subscribe((res) => {
        this.dataGET();
      });
  }

  public onDeleteHandler(productId: string) {
    this.showModal = true;
    this.productDeleteId = productId;
  }

  public onCloseModal() {
    this.showModal = false;
  }
  public onDeletedProdutHandler() {
    this.dataDELETE();
    this.showModal = false;
  }

  public onshowFormUpdateHandler(productId: string) {
    this.productUpdateId = productId;
    this.showUpdateProductForm = true;
    this.openCreatProductForm = true;
    let isMainUpdateProduct = this.datas.some(
      (product) => product[0] === productId
    );
    let mainUpdateProduct = this.datas.find(
      (product) => product[0] === productId
    );
    if (isMainUpdateProduct) {
      this.updateProductData = mainUpdateProduct[1];
    }
  }

  public onUpdateproductHandler() {
    this.showUpdateProductForm = false;
    this.openCreatProductForm = false;
    this.http
      .put(
        `https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct/${this.productUpdateId}.json`,
        this.updateProductData
      )
      .subscribe((res) => console.log(res));
  }
  public oncanselUpdateproductHandler() {
    this.showUpdateProductForm = false;
    this.openCreatProductForm = false;
  }
}
