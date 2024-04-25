import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'product-card',
        loadComponent: () => import('./component/card-information/card-information.component').then(m => m.CardInformationComponent)
    },
    {
        path: 'list-page',
        loadComponent:() => import('./pages/list-products/list-products.component').then(m => m.ListProductsComponent)
    },
    {
        path: 'cart',
        loadComponent:() => import('./component/card-cart/card-cart.component').then(m => m.CardCartComponent)
    }
]