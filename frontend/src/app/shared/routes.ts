import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent)
    }
];
