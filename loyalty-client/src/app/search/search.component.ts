import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

   // Estrutura para armazenar os critérios de busca
   searchCriteria = {
    cpf: '',
    placa: ''
  };

  // Armazena o resultado da pesquisa
  result: any = null;
  hasSearched = false;

  // Método para realizar a busca
  searchClient() {
    const { cpf, placa } = this.searchCriteria;

    // Simulação de uma base de dados
    const mockDatabase = [
      { nome: 'João Silva', cpf: '12345678901', placa: 'ABC1234', modelo: 'Civic', ano: 2020 },
      { nome: 'Maria Oliveira', cpf: '98765432100', placa: 'XYZ5678', modelo: 'Corolla', ano: 2018 }
    ];

    // Simula a pesquisa na base de dados
    this.result = mockDatabase.find(
      (client) => client.cpf === cpf || client.placa.toUpperCase() === placa.toUpperCase()
    );

    // Marca que a pesquisa foi realizada
    this.hasSearched = true;
  }
}
