import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: 'agregar-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
