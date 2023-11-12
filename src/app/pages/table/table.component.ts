import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interface/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  headerRoadMapTable: string[] = ['technology', 'theme', 'bool'];
  local: string = '';
  constructor() {}

  ngOnInit(): void {
    this.loadLocalStorage();
  }

  roadmapTable: Table[] = [
    { technology: 'HTML', theme: 'Элементы в HTML', bool: false },
    { technology: '', theme: 'Формы, валидация форм', bool: false },
    { technology: '', theme: 'Семантическая верстка', bool: false },
    { technology: 'CSS', theme: 'Элементы в HTML', bool: false },
    { technology: '', theme: 'Селекторы', bool: false },
    { technology: '', theme: 'Свойства', bool: false },
    {
      technology: '',
      theme: 'Позиционирование элементов, Flexbox, Grid',
      bool: false,
    },
    { technology: '', theme: 'Трансформации, переходы, анимации', bool: false },
    { technology: '', theme: '‘Адаптивный дизайн и медиазапросы', bool: false },
    {
      technology: '',
      theme: 'СSS-препроцессоры(sass, scss, less)',
      bool: false,
    },
    { technology: '', theme: 'БЭМ', bool: false },
    {
      technology: 'JavaScript',
      theme: 'Типы данных, преобразования типов',
      bool: false,
    },
    {
      technology: '',
      theme: 'Условное ветвление, логические операторы, циклы',
      bool: false,
    },
    {
      technology: '',
      theme: 'Функции, функциональные выражения, стрелочные функции, поднятие',
      bool: false,
    },
    { technology: '', theme: 'Замыкание, IIFE', bool: false },
    {
      technology: '',
      theme: 'Строки, шаблонные строки, регулярные выражения',
      bool: false,
    },
    {
      technology: '',
      theme: 'Массивы, методы массивов, перебор массивов',
      bool: false,
    },
    {
      technology: '',
      theme: 'Объекты, методы объектов, сравнение объектов, ссылки',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Классы, наследование, статические свойства и методы, защищенные свойства и методы',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Колбэки, промисы, обработка ошибок, микротаски, азупс/амаи, event loop',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Взаимодействие DOM (создание, добавление, изменение и удаление элементов веб-станиць), браузерные события, распространение событий',
      bool: false,
    },
    {
      technology: '',
      theme: 'Хранение данных - сооке, session storage, local storage',
      bool: false,
    },
    { technology: '', theme: 'Дебаг в Chrome DevTools', bool: false },
    {
      technology: '',
      theme: 'XMLHttpRequest, FetchApi, WebSocket',
      bool: false,
    },
  ];

addLocalStorage(index: number) {
    const item = this.roadmapTable[index];
    localStorage.setItem(item.theme, String(item.bool));
}

  clearLocalStorage() {
    localStorage.clear();
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    this.roadmapTable.forEach((item) => {
      const storedValue = localStorage.getItem(item.theme);
      if (storedValue === 'true') {
        item.bool = true;
      } else {
        item.bool = false;
      }
    });
  }

  check() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      this.local += `${key}: ${localStorage.getItem(key)}, `;
    }
    console.log(this.local.split(','));
  }

  refresh(): void {
    window.location.reload();
  }
}
