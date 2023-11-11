import { Component } from '@angular/core';
import { TableHtml } from 'src/app/interface/table-html';

const tableHtml: TableHtml[] = [
  { technology: 'HTML', theme: 'Элементы в HTML', ready: 'Bool?'},
  { technology: '', theme: 'Формы, валидация форм', ready: 'Bool?'},
  { technology: '', theme: 'Семантическая верстка', ready: 'Bool?'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  headerTableHtml: string[] = ['technology', 'theme', 'ready'];
  tableHtml = tableHtml;
}
