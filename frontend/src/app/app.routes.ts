import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/auth/routes').then(m => m.routes)
    },
    {
        path: 'products',
        loadChildren: () => import('./modules/products/routes').then(m => m.routes)
    }
];
