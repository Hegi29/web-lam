import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexPartnerComponent } from './pages/partner/index-partner/index-partner.component';
import { IndexProductComponent } from './pages/product/index-product/index-product.component';

const routes: Routes = [
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "",
            component: HomeComponent
        }]
    },
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "partner",
            component: IndexPartnerComponent
        }]
    },
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "product",
            component: IndexProductComponent
        }]
    },
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "product/:id",
            component: IndexProductComponent
        }]
    },
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "about",
            component: AboutComponent
        }]
    },
    {
        path: "",
        component: BaseLayoutComponent,
        children: [{
            path: "contact",
            component: ContactComponent
        }]
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
