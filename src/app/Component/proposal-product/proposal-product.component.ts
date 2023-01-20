import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proposal-product',
  templateUrl: './proposal-product.component.html',
  styleUrls: ['./proposal-product.component.css']
})
export class ProposalProductComponent implements OnInit {
  constructor(private http: HttpClient) {}
  datas: any;

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.http
      .get(
        'https://myknife-2e73f-default-rtdb.firebaseio.com/allProposalProduct.json'
      )
      .subscribe((res) => {
        // console.log(Object.entries(res));
        this.datas = Object.entries(res);
      });
  }
}

