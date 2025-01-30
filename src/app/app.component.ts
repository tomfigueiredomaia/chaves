import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa o CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Indica que este componente é independente (não precisa de módulo)
  imports: [CommonModule],  // ✅ Agora podemos usar [ngClass], *ngIf, *ngFor, etc.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chaves';
  funcoesAbertas = false; // ✅ Estado inicial do menu fechado

  toggleFuncoes() {
    this.funcoesAbertas = !this.funcoesAbertas; // ✅ Alterna entre aberto/fechado
  }
}



