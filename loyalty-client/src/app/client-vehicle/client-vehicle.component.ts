import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-vehicle',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './client-vehicle.component.html',
  styleUrl: './client-vehicle.component.css'
})
export class ClientVehicleComponent {

  client = {
    name: '',
    cpf: '',
    phone: '',
    phoneW: '',
    email: '',
    address: ''
  };

  vehicle = {
    plate: ''
  };

  onSubmit() {
    console.log('Dados do cliente:', this.client);

    // Lógica para envio ao backend ou API
    alert(`Cliente ${this.client.name} cadastrado com sucesso!`);
    this.resetForm();
  }

  resetForm() {
    this.client = {
      name: '',
      cpf: '',
      phone: '',
      phoneW: '',
      email: '',
      address: ''
    };
  }

}
