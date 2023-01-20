import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProposalProductComponent } from './Component/admin-proposal-product/admin-proposal-product.component';
import { HomeComponent } from './Component/home/home.component';
import { MainProductComponent } from './Component/main-product/main-product.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ProposalProductComponent } from './Component/proposal-product/proposal-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proposal-product', component: ProposalProductComponent },
  { path: 'proposal-product/:id', component: MainProductComponent },
  { path: 'admin-product', component: AdminProposalProductComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
