import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'product-card',
        loadComponent: () => import('./component/card-information/card-information.component').then(m => m.CardInformationComponent)
    }
]