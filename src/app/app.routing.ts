import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HomeComponent } from './layout/home/home.component';
import { IndexPartnerComponent } from './layout/partner/index-partner/index-partner.component';
import { IndexProductComponent } from './layout/product/index-product/index-product.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "partner",
        component: IndexPartnerComponent
    },
    {
        path: "product",
        component: IndexProductComponent
    },
    {
        path: "product/:id",
        component: IndexProductComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "**",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
