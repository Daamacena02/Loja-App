import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [ButtonModule,DrawerModule],
  templateUrl: './pagina-principal.component.html'
})
export class PaginaPrincipalComponent {
  visible = false;

  onClick(){
    this.visible = !this.visible;
  }
}
