import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxChartsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Dados para o gráfico
  chartData = [
    { "name": "Kenya", "value": 513268 },
    { "name": "Algeria", "value": 49647 },
    { "name": "Morocco", "value": 4420 },
    { "name": "Faroe Islands", "value": 50562 },
    { "name": "Eritrea", "value": 4383 },
    { "name": "Austria", "value": 167109 },
    { "name": "Sierra Leone", "value": 28579 },
    { "name": "Sint Maarten (Dutch Part)", "value": 37955 }
  ];

  // Configurações do gráfico
  view: [number, number] = [700, 400];
  colorScheme = 'vivid';

  // Função para formatação do rótulo (opcional)
  formatValue(value: number): string {
    return `${value}`;
  }

}
