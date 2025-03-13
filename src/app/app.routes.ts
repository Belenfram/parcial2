import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'libros',
        component: LibroComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'equipos',
        component: EquipoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path:'**',
        redirectTo:'home'
    },
];
