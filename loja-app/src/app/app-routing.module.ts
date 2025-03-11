import { Routes } from "@angular/router";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  { path:'home',component:PaginaPrincipalComponent}
];

export default routes;
